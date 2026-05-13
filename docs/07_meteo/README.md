# miWebDesplegada

## Clima Local PWA

Esta aplicación es una PWA que usa tu ubicación GPS para mostrar el clima local. También puedes escribir una ubicación manualmente.

### Archivos principales
- `index.html`: interfaz de usuario.
- `style.css`: estilos.
- `app.js`: lógica de geolocalización, búsqueda y consumo de Open-Meteo.
- `manifest.json`: manifiesto PWA.
- `sw.js`: service worker para cachear la app.

### Cómo usar
1. Abre la app en un servidor local o publícala en un sitio seguro (HTTPS).
2. Pulsa "Obtener mi ubicación" para cargar el clima usando GPS.
3. O escribe una ciudad o coordenadas y pulsa "Buscar".
4. La app guarda el último clima consultado para mostrarlo offline.

### Servir localmente
Puedes usar `python3 -m http.server` en el directorio del proyecto para probarla localmente.
