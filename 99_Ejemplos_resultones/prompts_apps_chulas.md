# Ejemplos e ideas para hacer Apps chulas
Entendidas como Apps Web en formato Progresive Web Aplication (PWA)



Lista de ideas:

- Dashboard:
    - Box Office de Películas
    - Temporada de F1
    - Juegos Olímpicos de Invierno
    - Asistencia Alumnos a un curso



- Calculadoras:
    - App de calculadora
    - Calculadora de peso ideal
    - Presupuestador web estudio de diseño


- Gestión:
    - TO DO list simple
    - TO DO List con fecha, vista de calendario y filtrado por urgencia y asignación
    - Chat usando Firebase / Supabase (esto lo tengo que investigar mejor)

- Acceso a Apis externas
    - Listado de personajes de los Simpson usando Simpson Api
    - Aceder a datos climatológicos
    - API Pockemon, Marvel..


🎮 APIs divertidas

| API                   | Temática | Qué devuelve           | Idea de ejercicio              |
| --------------------- | -------- | ---------------------- | ------------------------------ |
| The Simpsons API      | Series   | Frases, personajes     | Generador de frases aleatorias |
| Pokémon API           | Juegos   | Pokémon, tipos, stats  | Pokédex interactiva            |
| Rick and Morty API    | Series   | Personajes y episodios | Buscador de personajes         |
| Star Wars API (SWAPI) | Cine     | Planetas, personajes   | Explorador galáctico           |
| Harry Potter API      | Cine     | Hechizos, personajes   | Generador de hechizos          |
| Breaking Bad API      | Series   | Personajes             | Listado + filtros              |

🌍 APIs útiles (vida real)
| API                  | Temática | Qué devuelve            | Idea de ejercicio       |
| -------------------- | -------- | ----------------------- | ----------------------- |
| OpenWeatherMap       | Tiempo   | Clima actual y forecast | App del tiempo          |
| REST Countries       | Países   | Info de países          | Buscador por continente |
| Google Maps Platform | Mapas    | Geolocalización         | Mapa interactivo        |
| ExchangeRate API     | Finanzas | Cambio divisas          | Conversor €/$           |
| NewsAPI              | Noticias | Titulares               | App tipo periódico      |

😂 APIs curiosas (para motivar)
| API              | Temática | Qué devuelve      | Idea de ejercicio     |
| ---------------- | -------- | ----------------- | --------------------- |
| Chuck Norris API | Humor    | Chistes           | Bot de chistes        |
| Cat Facts API    | Animales | Datos curiosos    | App random facts      |
| Bored API        | Ocio     | Actividades       | “No sé qué hacer” app |
| Advice Slip API  | Consejos | Frases tipo coach | Generador de consejos |
| Dad Jokes API    | Humor    | Chistes malos     | Bot humorístico       |
   
🎬 APIs cine / cultura pop
| API                           | Temática | Qué devuelve     | Idea de ejercicio     |
| ----------------------------- | -------- | ---------------- | --------------------- |
| OMDb API                      | Cine     | Películas        | Buscador tipo IMDb    |
| TMDb                          | Cine     | Posters, ratings | Catálogo tipo Netflix |
| Marvel Cinematic Universe API | Marvel   | Personajes       | Fichas de superhéroes |


Más: https://github.com/public-apis/public-apis

Api fiestas locales:
https://api.generadordni.es/holidays


Emeplo de Uso:

🔹 Fetch simple con Pokémon

````js
// Obtener un Pokémon aleatorio
fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(res => res.json())
    .then(data => {
        console.log("Nombre:", data.name);
        console.log("Imagen:", data.sprites.front_default);
    });
```

Ejemplo 2:

````html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Pokemon Async</title>
</head>
<body>

<div id="pokemon"></div>

<script>
async function cargarPokemon() {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    const data = await res.json();

    document.getElementById("pokemon").innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
        <p>Peso: ${data.weight / 10} kg</p>
        <p>Altura: ${data.height / 10} m</p>
    `;
}

cargarPokemon();
</script>

</body>
</html>
``


## Dashboard BoxOffice de Películas
**Prompt**
```
crea un array con una lista de peliculas de harry potter y animales fantásitcos, y las pelis de el señor de los anillos y hobbit
grafica de ventas , budget,  año de publicación y nacionalidad, mapa de localizaciones y otros muchos datos

Quiero visualizar los datos de forma visual en varias gráficas o charts
puedes usar bibliotecas como chart.js
Diseño tipo dashboard llamativo

añade un sistema de filtros con el que pueda hacer checkbox en las películas que quiero seleccionar y que se actualicen los datos en tiempo real
```

### Dashboard Datos de Fórmula 1

```
HTML y JS 
F1 Dashboard
interactive  charts

Equipos, Pilotos, Puntos, Carreras, Clasificación, Circuitos, Paises

Añade mapa mundo interactivo con lugares donde hay circuitos
```

