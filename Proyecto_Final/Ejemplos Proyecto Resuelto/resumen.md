# Resumen del proyecto: TuristSpain

## Datos básicos
- **Nombre del proyecto:** TuristSpain
- **Alumno:** Miguel
- **Empresa o contexto:** Sector turístico en España (PWA para turistas y profesionales).
- **Tipo de solución:** Progressive Web App (PWA) de búsqueda y filtrado ágil de lugares de interés.
- **Herramientas usadas:** Google Antigravity, Supabase (Base de datos), HTML/CSS/JS (Vanilla).
- **Enlace demo:** Localhost / GitHub Pages (pendiente).
- **Repositorio:** Pendiente.

## Problema
Dificultad y pérdida de tiempo en la búsqueda de información turística relevante y dispersa. Los turistas pierden entre 20 y 30 minutos por búsqueda, y las agencias de viaje entre 5 y 10 minutos diarios en tareas de recomendación.

## Stakeholders
- **Turistas:** Necesitan planificar visitas de forma rápida y cercana.
- **Profesionales del turismo:** Agencias que necesitan recomendar lugares de interés de forma ágil a sus clientes.
- **Zonas turísticas menos conocidas:** Lugares que no se dan a conocer por falta de visibilidad en plataformas tradicionales.

## Solución
Una PWA que permite visualizar listados de actividades por región, filtrando por categoría (monumentos, gastronomía, etc.). El sistema utiliza geolocalización para mostrar puntos de interés en un radio de 75km del usuario.

## Proceso mejorado
Planificación de visitas y recomendación profesional instantánea mediante filtros dinámicos y geolocalización, reduciendo el tiempo de búsqueda a menos de 1 minuto.

## Prompts usados
- Organización de datos desde Supabase (título, GPS, dirección, horarios, etc.).
- Implementación de lógica de geolocalización (radio 75km).
- Creación de múltiples vistas (Lista, Tabla, Ficha) y mapa integrado.

## Pruebas realizadas
- Testeo con usuarios reales (familiares y amigos).
- Pruebas técnicas en dispositivos móviles reales para validar la experiencia PWA y GPS.

## Riesgos
- Privacidad de los datos de ubicación.
- Dependencia de la API de mapas y conexión a internet.
- Veracidad de los datos en la base de datos (mantenimiento).

## Hoja de ruta
- Ampliar la base de datos a nivel nacional completo.
- Integrar sistema de reservas directo desde la ficha (tiket).
- Modo offline para zonas con poca cobertura.
