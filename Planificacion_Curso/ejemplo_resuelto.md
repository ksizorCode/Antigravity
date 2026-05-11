https://docs.google.com/presentation/d/1xuFz7pR-ef1ONL5a6A1roKQ-dQ6hniXH2-6R8uP2mqs/edit?usp=sharing


# Proyecto final: Gestor inteligente de actividades culturales locales

**Caso ficticio:** Ayuntamiento pequeño / asociación cultural local que informa de actividades. 
**Solución:** Aplicación web con IA para crear, ordenar y revisar fichas de actividades culturales  
**Herramientas:** Google Antigravity, HTML, CSS, JavaScript, GitHub Pages  
**Formato:** Informe ejecutivo A4 vertical

---

# FASE 1 🚀 — Selección del problema

## Problema detectado

Una entidad cultural local organiza actividades como talleres, conciertos, exposiciones, charlas, teatro y actividades infantiles.

El problema es que la información de cada actividad llega de forma desordenada por email, formularios, llamadas o mensajes internos. Después, el personal debe convertir esa información en una ficha clara para publicarla en la web, carteles, redes sociales o boletines.

Este proceso consume tiempo, provoca errores y retrasa la comunicación con la ciudadanía.

## Contexto

El problema aparece en el área de **gestión cultural y comunicación**, especialmente cuando se preparan actividades para la agenda municipal o cultural.

El flujo habitual es:

1. Se recibe una propuesta de actividad.
2. Se revisan los datos.
3. Se redacta una descripción.
4. Se adapta el texto para web o redes sociales.
5. Se publica o se envía para revisión.

## Periodicidad

El problema aparece de forma **semanal**.

En periodos de alta actividad, como fiestas locales, Navidad, verano o semanas culturales, la carga aumenta mucho.

## Qué aportaría resolverlo

Resolver esta fricción permitiría:

- Ahorrar tiempo administrativo.
- Reducir errores en fechas, horarios y lugares.
- Mejorar la calidad de los textos publicados.
- Publicar las actividades con mayor rapidez.
- Facilitar el trabajo del equipo de cultura.
- Mejorar la experiencia de la ciudadanía.

## Nuevos problemas que podría generar la solución

La solución también puede generar algunos riesgos:

| Posible problema | Explicación |
|---|---|
| Dependencia de la herramienta | El equipo podría confiar demasiado en la IA |
| Errores en textos generados | La IA puede inventar o interpretar mal datos |
| Falta de formación | Algunas personas pueden necesitar ayuda inicial |
| Privacidad | Podrían introducirse datos personales innecesarios |
| Resistencia al cambio | Parte del equipo puede preferir el método anterior |
| Fallos técnicos | La herramienta puede no estar disponible en algún momento |

---

# FASE 2 🪴 — Proceso elegido, stakeholders, evidencia de fricción y coste actual

## Proceso elegido

El proceso elegido es la **creación de fichas de actividades culturales para su publicación**.

El objetivo es mejorar la tarea de transformar información desordenada en una ficha clara, estructurada y lista para revisión.

## Flujo actual del proceso

| Paso | Acción actual | Problema |
|---|---|---|
| 1 | Recepción de información del evento | Llega incompleta o desordenada |
| 2 | Revisión manual | Consume tiempo |
| 3 | Redacción de descripción | Trabajo repetitivo |
| 4 | Clasificación de actividad | Se hace manualmente |
| 5 | Adaptación para redes sociales | Requiere volver a redactar |
| 6 | Publicación | Puede retrasarse por errores previos |

## Stakeholders

| Stakeholder | Cómo le afecta |
|---|---|
| Personal administrativo | Dedica tiempo a copiar, revisar y redactar |
| Técnico/a de cultura | Necesita validar actividades y programación |
| Equipo de comunicación | Recibe textos poco preparados |
| Ciudadanía | Puede recibir información incompleta o tarde |
| Organizadores externos | No siempre envían todos los datos necesarios |
| Dirección municipal | Necesita una visión clara de la programación |

## Evidencia de fricción

Para este caso se parte de una situación simulada pero realista:

- Se gestionan unas **15 actividades culturales al mes**.
- Cada ficha tarda entre **20 y 30 minutos** en prepararse.
- El tiempo medio estimado por ficha es de **25 minutos**.
- El **30 % de las actividades** llegan con datos incompletos.
- Hay errores frecuentes en fechas, lugares o textos.
- El equipo debe adaptar varias veces la misma información.

## Coste actual estimado

Se toma como referencia un coste interno de **18 €/hora**.

| Concepto | Estimación |
|---|---:|
| Actividades mensuales | 15 |
| Tiempo medio por actividad | 25 minutos |
| Tiempo total mensual | 6,25 horas |
| Coste interno por hora | 18 € |
| Coste mensual estimado | 112,50 € |
| Coste anual estimado | 1.350 € |

## Impacto no económico

Además del coste económico, existen otros impactos:

- Retrasos en la publicación.
- Peor calidad en la comunicación.
- Duplicación de tareas.
- Mayor probabilidad de errores.
- Menor tiempo disponible para tareas culturales de más valor.

---

# FASE 3 🏀 — Definición del caso de uso y criterios de éxito

## Caso de uso principal

Una persona del área de cultura recibe los datos básicos de una actividad cultural.

Accede a la aplicación, introduce la información disponible y la herramienta genera una ficha estructurada con descripción, categoría, datos principales y texto breve para redes sociales.

Antes de publicar, una persona revisa y corrige el resultado si es necesario.

## Ejemplo de uso

El equipo recibe esta información:

> “Taller de cerámica para adultos. Asociación Barro Vivo. Día 14 de junio a las 18:00 en el Centro Cultural La Plaza. Gratuito. Actividad para aprender técnicas básicas.”

La aplicación genera:

- Ficha estructurada.
- Categoría: taller / artesanía.
- Descripción clara.
- Texto para redes sociales.
- Aviso de revisión humana.

## Usuarios principales

| Usuario | Uso de la herramienta |
|---|---|
| Personal administrativo | Introduce datos y copia la ficha final |
| Técnico/a de cultura | Revisa el contenido antes de publicar |
| Comunicación | Usa el texto para web y redes |
| Dirección | Consulta la programación de forma más clara |

## Criterios de éxito

| Criterio | Objetivo |
|---|---|
| Reducción de tiempo | Bajar de 25 minutos a 15 minutos por ficha |
| Calidad del texto | Generar descripciones claras y útiles |
| Clasificación | Clasificar bien al menos 8 de cada 10 eventos |
| Usabilidad | Que una persona no técnica pueda usarla |
| Control humano | Que ninguna ficha se publique automáticamente |
| Detección de errores | Avisar si faltan datos clave |

## KPI principal

> Reducir al menos un **40 %** el tiempo de preparación de fichas culturales.

## KPIs secundarios

| KPI | Meta |
|---|---|
| Fichas útiles generadas | 80 % |
| Avisos correctos por datos incompletos | 80 % |
| Tiempo medio de uso | Máximo 15 minutos |
| Errores graves publicados | 0 |
| Satisfacción del usuario interno | Mínimo 7/10 |

---

# FASE 4 🎯 — Diseño de la solución MVP

## Nombre de la solución

**CulturaLocal IA**

## Descripción del MVP

El MVP es una aplicación web sencilla que permite crear fichas de actividades culturales con ayuda de IA.

No es una solución completa de gestión cultural. Es una primera versión para comprobar si la idea funciona y si realmente ahorra tiempo.

## Usuario principal

Personal administrativo o técnico de cultura.

## Problema que resuelve

Reduce el tiempo necesario para preparar fichas culturales y mejora la estructura de la información antes de publicarla.

## Entrada de datos

El usuario introduce:

| Campo | Ejemplo |
|---|---|
| Nombre del evento | Taller de cerámica para adultos |
| Fecha | 14 de junio |
| Hora | 18:00 |
| Lugar | Centro Cultural La Plaza |
| Público objetivo | Adultos |
| Precio | Gratuito |
| Organizador | Asociación Barro Vivo |
| Descripción inicial | Taller práctico de técnicas básicas de cerámica |

## Salida esperada

La aplicación genera:

- Título del evento.
- Categoría sugerida.
- Ficha estructurada.
- Descripción breve.
- Texto para redes sociales.
- Avisos de datos incompletos.
- Mensaje de revisión humana.

## Ejemplo de resultado generado

**Taller de cerámica para adultos**

El Centro Cultural La Plaza acoge un taller práctico de cerámica dirigido a personas adultas. La actividad permitirá conocer técnicas básicas de modelado y creación manual.

**Fecha:** 14 de junio  
**Hora:** 18:00  
**Lugar:** Centro Cultural La Plaza  
**Precio:** Gratuito  
**Categoría:** Taller / Artesanía  

**Texto para redes sociales:**  
¿Te apetece iniciarte en la cerámica? El 14 de junio a las 18:00 te esperamos en el Centro Cultural La Plaza para participar en un taller gratuito para adultos.

**Aviso:**  
Contenido generado con ayuda de IA. Revisar antes de publicar.

## Pantallas del MVP

| Pantalla | Función |
|---|---|
| Inicio | Presenta la herramienta |
| Formulario | Permite introducir datos del evento |
| Resultado | Muestra la ficha generada |
| Revisión | Indica posibles datos incompletos |
| Copia final | Permite copiar el texto revisado |

## Limitaciones del MVP

La primera versión no incluye:

- Publicación automática.
- Usuarios con permisos.
- Base de datos avanzada.
- Integración con redes sociales.
- Integración con calendario municipal.
- Envío automático de emails.
- Validación legal completa.
- Analítica avanzada.

---

# FASE 5 🥐 — Construcción en Google Antigravity: PoC

## Objetivo de la PoC

La PoC demuestra que la solución puede funcionar técnicamente y que el flujo principal es viable.

El objetivo no es construir una aplicación final, sino una prueba funcional que permita evaluar la idea.

## Qué se ha construido

Se ha creado una aplicación web básica con:

- Formulario de entrada.
- Botón para generar ficha.
- Resultado estructurado.
- Clasificación automática.
- Texto para redes sociales.
- Aviso de revisión humana.
- Botón para copiar el contenido.

## Flujo de funcionamiento

| Paso | Acción | Resultado |
|---|---|---|
| 1 | El usuario abre la aplicación | Ve la pantalla inicial |
| 2 | Introduce datos del evento | El sistema recoge la información |
| 3 | Pulsa “Generar ficha” | La IA prepara el contenido |
| 4 | Revisa el resultado | Corrige si es necesario |
| 5 | Copia la ficha final | La usa en web, cartel o redes |

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Google Antigravity | Desarrollo asistido del prototipo |
| HTML | Estructura de la web |
| CSS | Diseño visual |
| JavaScript | Interacción básica |
| GitHub | Repositorio del proyecto |
| GitHub Pages | Publicación de la demo |

## Archivos principales del prototipo

```text
index.html
style.css
script.js
README.md
```

## Ejemplo de despliegue

**Repositorio:**  
`https://github.com/usuario/culturalocal-ia`

**Demo en GitHub Pages:**  
`https://usuario.github.io/culturalocal-ia/`

## Qué funciona actualmente

- Introducción de datos de una actividad.
- Generación de una ficha cultural.
- Creación de texto para redes sociales.
- Clasificación básica del evento.
- Aviso si faltan campos clave.
- Copia manual del resultado.

## Qué no funciona todavía

- No guarda fichas en una base de datos.
- No permite iniciar sesión.
- No publica directamente en redes.
- No se integra con calendarios reales.
- No detecta automáticamente solapamientos de fechas.
- No tiene sistema avanzado de permisos.

---

# FASE 6 🦖 — Evaluación y ajuste

## Método de evaluación

Se probaron 10 casos simulados de actividades culturales.

Los casos incluyeron:

- Eventos completos.
- Eventos con datos incompletos.
- Eventos ambiguos.
- Actividades infantiles.
- Actividades gratuitas y de pago.
- Textos largos.
- Textos demasiado breves.

## Casos de prueba

| Nº | Tipo de actividad | Resultado |
|---:|---|---|
| 1 | Taller infantil | Correcto |
| 2 | Concierto local | Correcto |
| 3 | Exposición de pintura | Correcto |
| 4 | Charla histórica | Correcto |
| 5 | Teatro familiar | Correcto |
| 6 | Taller sin precio indicado | Aviso correcto |
| 7 | Evento sin ubicación | Aviso correcto |
| 8 | Actividad ambigua | Clasificación mejorable |
| 9 | Texto largo del organizador | Resumen correcto |
| 10 | Evento sin público definido | Aviso correcto |

## Resultados

| Indicador | Resultado |
|---|---:|
| Casos probados | 10 |
| Fichas útiles generadas | 8 |
| Clasificaciones correctas | 8 |
| Avisos útiles por datos incompletos | 3 |
| Tiempo medio anterior | 25 minutos |
| Tiempo medio con prototipo | 12-15 minutos |

## Evaluación del KPI principal

El objetivo era reducir el tiempo de preparación de una ficha de 25 minutos a 15 minutos o menos.

El prototipo consigue una reducción aproximada del **40 % al 50 %** en los casos simples y completos.

## Problemas detectados

| Problema | Ajuste propuesto |
|---|---|
| Actividades ambiguas | Añadir preguntas de aclaración |
| Datos incompletos | Marcar campos obligatorios |
| Texto demasiado genérico | Mejorar instrucciones de generación |
| Clasificación limitada | Añadir más categorías culturales |
| Riesgo de confianza excesiva | Mantener aviso de revisión humana |

## Conclusión de la evaluación

El prototipo es útil como apoyo interno. Ahorra tiempo, ordena la información y genera textos aprovechables.

No debe usarse sin revisión humana porque puede cometer errores, especialmente cuando la información inicial es incompleta o ambigua.

---

# FASE 7 🚕 — Responsabilidad y cumplimiento

## Riesgos principales

| Riesgo | Impacto | Medida de control |
|---|---|---|
| Error en fecha u hora | Información incorrecta al público | Revisión humana obligatoria |
| Error en ubicación | Ciudadanía confundida | Validación antes de publicar |
| Texto inventado | Comunicación engañosa | La IA no debe añadir datos no proporcionados |
| Datos personales | Riesgo de privacidad | No introducir datos innecesarios |
| Publicación automática | Error difundido sin control | No automatizar publicaciones |
| Dependencia de IA | Pérdida de criterio humano | Formación y supervisión |
| Fallo técnico | Interrupción del proceso | Mantener alternativa manual |

## Privacidad

La herramienta debe evitar el uso de datos personales innecesarios.

Datos que no deberían introducirse salvo necesidad:

- DNI.
- Teléfonos personales.
- Emails personales.
- Direcciones privadas.
- Datos de menores.
- Información financiera.
- Información sensible de participantes.

## Supervisión humana

La solución siempre debe funcionar con revisión humana.

La ficha generada no se publica automáticamente. Primero debe comprobarse:

- Fecha.
- Hora.
- Lugar.
- Precio.
- Público objetivo.
- Organizador.
- Condiciones de inscripción.
- Lenguaje utilizado.

## Transparencia

La aplicación muestra el aviso:

> “Contenido generado con ayuda de IA. Revisar antes de publicar.”

## Cumplimiento

Antes de usar la herramienta en un entorno real habría que revisar:

- Protección de datos.
- Permisos de acceso.
- Almacenamiento de información.
- Condiciones de uso de la IA.
- Responsabilidad sobre los contenidos publicados.

## Medida responsable principal

La medida más importante es que la IA **no toma decisiones finales ni publica contenido automáticamente**.

Su función es ayudar a redactar y ordenar información. La decisión final corresponde siempre a una persona.

---

# FASE 8 🤖 — Presentación final y hoja de ruta

## Presentación final del proyecto

La presentación final explicará:

1. Problema detectado.
2. Personas afectadas.
3. Coste actual.
4. Solución propuesta.
5. Funcionamiento del MVP.
6. Demo del prototipo.
7. Resultados de las pruebas.
8. Riesgos y medidas de control.
9. Hoja de ruta.
10. Conclusión.

## Demo del prototipo

La demo mostrará el siguiente flujo:

1. Abrir la aplicación.
2. Introducir una actividad cultural.
3. Generar la ficha.
4. Revisar avisos.
5. Copiar el resultado.
6. Mostrar cómo se usaría en web o redes sociales.

## Evidencias incluidas

La entrega puede incluir:

- Enlace a GitHub Pages.
- Repositorio de GitHub.
- Capturas de pantalla.
- Vídeo breve de uso.
- Esquema del flujo.
- README explicativo.

## Hoja de ruta

| Fase | Acción | Objetivo |
|---|---|---|
| Semana 1 | Probar con usuarios internos | Detectar errores de uso |
| Semana 2 | Añadir más casos de prueba | Mejorar precisión |
| Semana 3 | Mejorar avisos de campos incompletos | Evitar publicaciones incorrectas |
| Semana 4 | Publicar demo interna | Validar el flujo completo |
| Mes 2 | Añadir guardado de fichas | Crear histórico de actividades |
| Mes 3 | Añadir calendario visual | Ver programación mensual |
| Mes 4 | Añadir roles de usuario | Controlar permisos |
| Fase posterior | Integrar con web municipal | Evitar duplicar trabajo |
| Fase posterior | Exportar a redes sociales | Mejorar comunicación |

## Mejoras futuras

- Sistema de usuarios.
- Panel de administración.
- Calendario de actividades.
- Exportación a PDF.
- Generación de carteles simples.
- Base de datos de eventos.
- Integración con newsletter.
- Control de versiones.
- Estadísticas de actividades.
- Conversión a PWA.

---

# FASE 9 🔥 — Entrega final

## A. Informe ejecutivo del proyecto

El informe ejecutivo incluye:

1. Selección del problema.
2. Proceso elegido.
3. Stakeholders.
4. Evidencia de fricción.
5. Coste actual.
6. Caso de uso.
7. Criterios de éxito.
8. Diseño del MVP.
9. Construcción de la PoC.
10. Evaluación.
11. Riesgos y cumplimiento.
12. Hoja de ruta.

## B. Demo del prototipo

La demo se entrega mediante:

| Elemento | Descripción |
|---|---|
| Web publicada | Prototipo accesible desde GitHub Pages |
| Repositorio | Código fuente del proyecto |
| Capturas | Pantallas principales |
| Vídeo | Grabación breve del funcionamiento |
| README | Explicación del proyecto |

## Enlaces simulados de entrega

**Demo web:**  
`https://usuario.github.io/culturalocal-ia/`

**Repositorio:**  
`https://github.com/usuario/culturalocal-ia`

## Archivos entregados

```text
index.html
style.css
script.js
README.md
capturas/
video-demo.mp4
informe-proyecto.pdf
```

## Pasos realizados para desplegar en GitHub Pages

1. Crear repositorio en GitHub.
2. Subir los archivos del proyecto.
3. Entrar en **Settings**.
4. Ir a **Pages**.
5. Seleccionar la rama `main`.
6. Elegir carpeta raíz.
7. Guardar configuración.
8. Copiar el enlace generado.

## Posible mejora PWA

Como mejora futura, la aplicación podría convertirse en PWA para que el equipo pueda instalarla en móvil o escritorio.

Archivos necesarios:

```text
manifest.json
service-worker.js
icon-192.png
icon-512.png
```

Esta mejora no forma parte obligatoria de la PoC, pero aumentaría la comodidad de uso.

---

# Conclusión final

El proyecto **CulturaLocal IA** demuestra que una herramienta sencilla con IA puede reducir una fricción real en una entidad local: la creación manual de fichas de actividades culturales.

La solución permite ahorrar tiempo, ordenar mejor la información y mejorar la comunicación con la ciudadanía. La prueba de concepto muestra resultados positivos, especialmente en actividades completas y bien descritas.

El prototipo tiene límites claros: no publica automáticamente, no sustituye la revisión humana y no está preparado todavía para producción.

Aun así, como MVP educativo, cumple el objetivo principal: demostrar que una solución práctica con IA puede aportar valor, ser viable técnicamente y aplicarse de forma responsable.
