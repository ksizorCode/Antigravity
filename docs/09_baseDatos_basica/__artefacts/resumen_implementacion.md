# Implementación: Lista de Clientes PWA

He completado la creación de la base de datos y la aplicación web progresiva (PWA) para la gestión de tus clientes.

## 🗄️ Base de Datos (Supabase)
Se ha creado la tabla `lista_clientes` con la siguiente estructura:
- `id`: Identificador único (UUID).
- `nombre`: Nombre completo del cliente.
- `empresa`: Nombre de la organización.
- `email`: Correo electrónico de contacto.
- `telefono`: Número de teléfono.
- `notas`: Comentarios adicionales.
- `created_at`: Fecha de registro automática.

**Datos de ejemplo:** Se han insertado 5 clientes ficticios para que puedas probar la visualización de inmediato.

## 📱 Aplicación (PWA)
La aplicación ha sido diseñada con un enfoque **mobile-first** y estética **premium**:
- **Vista de Lista**: Visualización clara de todos los clientes con opción de búsqueda en tiempo real.
- **Añadir Clientes**: Botón flotante (FAB) que abre un formulario elegante para registrar nuevos clientes.
- **Diseño**: Glassmorphism (efecto cristal), modo oscuro profundo y tipografías modernas (Inter & Outfit).
- **Instalable**: Configurada como PWA, lo que permite "Añadir a la pantalla de inicio" en móviles para usarla como una app nativa.

## 🚀 Próximos Pasos
Para ver la aplicación en funcionamiento:
1. Abre el archivo `index.html` en tu navegador.
2. Si deseas probarla en tu móvil, puedes desplegar estos archivos en un servicio de hosting (como Vercel o GitHub Pages) o usar una herramienta como `ngrok` para verla localmente desde tu smartphone.
