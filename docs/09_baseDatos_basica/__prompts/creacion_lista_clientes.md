# Creación de PWA de Lista de Clientes con Supabase

El usuario solicitó:
1. Crear una tabla en Supabase para clientes.
2. Añadir datos de ejemplo.
3. Crear una PWA para ver y añadir clientes desde el móvil.

## Pasos realizados:
- Se creó la tabla `lista_clientes` en Supabase con campos para nombre, email, teléfono, empresa y notas.
- Se insertaron 5 registros de ejemplo.
- Se desarrolló una PWA con:
    - `index.html`: Interfaz limpia y adaptada a móviles.
    - `style.css`: Diseño premium con Glassmorphism y modo oscuro.
    - `app.js`: Integración con Supabase para CRUD básico.
    - `manifest.json` y `sw.js`: Configuración PWA.
