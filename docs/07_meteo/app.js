const btnLocate = document.getElementById('btn-locate');
const btnSearch = document.getElementById('btn-search');
const btnRefresh = document.getElementById('btn-refresh');
const inputLocation = document.getElementById('location-input');
const messageEl = document.getElementById('message');
const weatherCard = document.getElementById('weather-card');
const locationNameEl = document.getElementById('location-name');
const weatherTimeEl = document.getElementById('weather-time');
const temperatureEl = document.getElementById('temperature');
const conditionEl = document.getElementById('condition');
const windEl = document.getElementById('wind');
const windDirectionEl = document.getElementById('wind-direction');
const pressureEl = document.getElementById('pressure');

let lastLocation = null;

const weatherDescriptions = {
  0: 'Despejado',
  1: 'Principalmente despejado',
  2: 'Parcialmente nublado',
  3: 'Nublado',
  45: 'Neblina',
  48: 'Escarcha',
  51: 'Llovizna ligera',
  53: 'Llovizna moderada',
  55: 'Llovizna densa',
  56: 'Llovizna helada',
  57: 'Llovizna helada intensa',
  61: 'Lluvia ligera',
  63: 'Lluvia moderada',
  65: 'Lluvia intensa',
  66: 'Lluvia helada ligera',
  67: 'Lluvia helada intensa',
  71: 'Nieve ligera',
  73: 'Nieve moderada',
  75: 'Nieve intensa',
  77: 'Aguanieve',
  80: 'Chubascos ligeros',
  81: 'Chubascos moderados',
  82: 'Chubascos fuertes',
  85: 'Nieve ligera',
  86: 'Nieve intensa',
  95: 'Tormenta eléctrica',
  96: 'Tormenta eléctrica con granizo ligero',
  99: 'Tormenta eléctrica con granizo fuerte'
};

const showMessage = text => {
  messageEl.textContent = text;
};

const toCardinal = deg => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(deg / 45) % 8];
};

const formatTime = date => new Intl.DateTimeFormat('es-ES', {
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'long',
  day: '2-digit',
  month: 'short'
}).format(date);

const saveCache = data => {
  localStorage.setItem('clima-local-last', JSON.stringify(data));
};

const loadCache = () => {
  const raw = localStorage.getItem('clima-local-last');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const renderWeather = ({ name, current_weather, timezone }) => {
  weatherCard.classList.remove('hidden');
  locationNameEl.textContent = name;
  weatherTimeEl.textContent = `Última actualización: ${formatTime(new Date())}`;
  temperatureEl.textContent = `${Math.round(current_weather.temperature)}°C`;
  const weatherText = weatherDescriptions[current_weather.weathercode] || 'Mensaje no disponible';
  conditionEl.textContent = weatherText;
  windEl.textContent = `${current_weather.windspeed} km/h`;
  windDirectionEl.textContent = `${toCardinal(current_weather.winddirection)}`;
  pressureEl.textContent = `Código ${current_weather.weathercode}`;
  showMessage(`Clima cargado para ${name}.`);
};

const fetchWeather = async ({ latitude, longitude, name }) => {
  showMessage('Cargando clima...');
  btnLocate.disabled = true;
  btnSearch.disabled = true;
  btnRefresh.disabled = true;

  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&pressure_unit=hpa&timezone=auto`;
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error('No se pudo obtener el clima.');
    }
    const data = await response.json();
    const weatherData = {
      name,
      current_weather: data.current_weather,
      timezone: data.timezone
    };
    renderWeather(weatherData);
    saveCache(weatherData);
    lastLocation = { latitude, longitude, name };
  } catch (error) {
    const cached = loadCache();
    if (cached) {
      renderWeather(cached);
      showMessage('Error de red. Mostrando último clima disponible.');
    } else {
      showMessage(error.message || 'Error al cargar el clima.');
    }
  } finally {
    btnLocate.disabled = false;
    btnSearch.disabled = false;
    btnRefresh.disabled = false;
  }
};

const geocode = async query => {
  const encoded = encodeURIComponent(query);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encoded}&count=1&language=es&format=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('No se pudo geocodificar la ubicación.');
  }
  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error('Ubicación no encontrada.');
  }
  const place = data.results[0];
  return {
    latitude: place.latitude,
    longitude: place.longitude,
    name: `${place.name}${place.country ? ', ' + place.country : ''}`
  };
};

const requestLocation = () => {
  if (!navigator.geolocation) {
    showMessage('Geolocalización no disponible en este navegador.');
    return;
  }
  showMessage('Solicitando ubicación...');
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      fetchWeather({ latitude, longitude, name: 'Tu ubicación' });
    },
    error => {
      showMessage('No se pudo acceder al GPS. Usa la ubicación manual.');
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );
};

btnLocate.addEventListener('click', requestLocation);
btnSearch.addEventListener('click', async () => {
  const value = inputLocation.value.trim();
  if (!value) {
    showMessage('Escribe una ubicación válida.');
    return;
  }

  let target = null;
  const coordinateMatch = value.match(/(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/);
  if (coordinateMatch) {
    target = {
      latitude: parseFloat(coordinateMatch[1]),
      longitude: parseFloat(coordinateMatch[2]),
      name: `Lat ${coordinateMatch[1]}, Lon ${coordinateMatch[2]}`
    };
  } else {
    try {
      target = await geocode(value);
    } catch (error) {
      showMessage(error.message);
      return;
    }
  }

  fetchWeather(target);
});

btnRefresh.addEventListener('click', () => {
  if (!lastLocation) {
    showMessage('Primero solicita tu ubicación o busca una ubicación.');
    return;
  }
  fetchWeather(lastLocation);
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
      console.warn('Registro de service worker fallido.');
    });
  }
  const cached = loadCache();
  if (cached) {
    renderWeather(cached);
    showMessage('Mostrando último clima guardado.');
  }
});
