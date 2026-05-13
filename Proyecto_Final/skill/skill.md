---
name: memoria-proyecto-ia
description: >
  Genera el informe ejecutivo y memoria de proyecto completo de una App,
  Web o PWA para PYMES desarrollado con IA Vibe Coding a través de Google Antigravity, siguiendo
  las fases del enunciado (problema, stakeholders, MVP, PoC, evaluación, riesgos, hoja de ruta).
  Úsalo siempre que el alumno quiera redactar su memoria de proyecto, informe ejecutivo,
  documento de entrega final, o cuando mencione frases como "genera mi informe", "escribe
  la memoria", "necesito el PDF del proyecto", "redacta el documento final" o similares.
  También actívalo si el alumno describe su proyecto y pide que se lo estructure o documente.
---

# Skill: Memoria de Proyecto IA (Informe Ejecutivo)

## Objetivo

Generar una **Memoria de Proyecto + informe ejecutivo completo** (formato A4 vertical, 12-22 páginas equivalentes en Markdown)
a partir de la información que el alumno proporcione sobre su proyecto.

El documento debe:
- Cubrir las 9 fases del enunciado
- Narrar el **proceso de trabajo real**: qué prompts usó, en qué se inspiró, qué herramientas empleó, qué decisiones tomó y por qué
- Incluir ejemplos concretos (inputs/outputs reales del prototipo)
- Ser comprensible para una persona no técnica
- Ser entregable directamente como PDF o presentación

---

## Paso 1 — Recopilar información del alumno

Antes de generar nada, obtén los datos del proyecto mediante una **entrevista estructurada**.
Haz las preguntas en bloques, no todas a la vez. Adapta el tono: cercano, directo, sin jerga innecesaria.

### Bloque A — El problema y el contexto
Pregunta:
1. ¿Qué problema detectaste? ¿En qué tipo de empresa o entorno?
2. ¿Es un caso real o ficticio? ¿Tiene nombre la empresa/entidad?
3. ¿Cuándo y con qué frecuencia aparece ese problema?
4. ¿A quién afecta más directamente?

### Bloque B — El proceso y el coste
Pregunta:
5. ¿Cuál es el proceso concreto que quisiste mejorar? (gestión de citas, respuesta a emails, fichas de producto…)
6. ¿Tienes algún dato de cuánto tiempo o dinero consume ese proceso? (aunque sea estimado)
7. ¿Qué pasaría si no se resuelve?

### Bloque C — La solución diseñada
Pregunta:
8. ¿Qué nombre le pusiste a tu solución o app?
9. ¿Qué hace exactamente? ¿Qué introduce el usuario y qué recibe?
10. ¿Usaste Google Antigravity? ¿Cómo se llama el prototipo / dónde está publicado?
11. ¿Qué herramientas técnicas usaste? (HTML, JS, GitHub Pages, APIs…)

### Bloque D — El proceso de trabajo (clave para la memoria)
Pregunta:
12. ¿Qué prompts usaste para construir la solución? (pide que pegue alguno o los resuma)
13. ¿En qué te inspiraste? ¿Viste algún ejemplo, referencia o proyecto similar?
14. ¿Qué fue lo más difícil? ¿Qué tuviste que cambiar o repetir?
15. ¿Qué resultado obtuviste en las pruebas? (número de casos probados, aciertos, tiempo ahorrado…)

### Bloque E — Riesgos y entrega
Pregunta:
16. ¿Qué riesgos identificaste al usar IA en este contexto?
17. ¿Cómo entregas el prototipo? (enlace web, GitHub, vídeo, capturas…)
18. ¿Qué harías si tuvieras más tiempo? (hoja de ruta)

### Bloque F — Estética y presentación
Pregunta:
17. ¿Quieres el documento en formato Markdonw o una web en HTML y css?
18. En caso de queder una web ¿Qué estilo quieres que tenga: A. Claro Técnico y Formar, B. Moderno, Minimalista pero Divertido con un color para cada sección, C. Elegante, Corporativo y Lujoso, D. I Love Comis Sans?
19. ¿Quires añadir elementos gráficos explicativos como gráficos como tablas, arbol de archivos, esquemas Mermaid, etc..?


> **Nota**: Si el alumno ya ha compartido parte de esta información en la conversación, extráela directamente sin volver a preguntar. Solo haz las preguntas que falten.

## Paso 1.5 — Diagnóstico de suficiencia

Antes de redactar el informe, clasifica la información recibida en:

- Información suficiente
- Información incompleta pero utilizable
- Información crítica ausente

No redactes el informe completo si faltan datos críticos:
- problema concreto
- usuario o stakeholder principal
- solución propuesta
- proceso mejorado
- al menos un ejemplo de uso
- forma de entrega del prototipo

Si faltan datos no críticos, puedes avanzar usando estimaciones marcadas claramente.
> **Nota** Si el alumno no tiene datos numéricos, propón estimaciones razonables y pide confirmación rápida. Ejemplo: "Si no tienes el dato exacto, puedo usar una estimación: 10 consultas semanales × 8 minutos por consulta × 15 €/hora. ¿Te encaja?". Cuando uses una estimación no confirmada, márcala como "estimación orientativa".
---

## Paso 2 — Estructura del documento a generar

Una vez tengas los datos, genera el informe completo con esta estructura.
Usa **Markdown limpio** (sin bullets anidados excesivos, sin negrita en cada frase).
El tono es profesional pero claro. Nada de jerga que no se explique.

---

### ESTRUCTURA DEL INFORME EJECUTIVO

```
# [Nombre del proyecto]
## Informe Ejecutivo — Proyecto Final IA

Alumno: [nombre]
Fecha: [fecha]
Herramientas: [lista]
Enlace demo: [url si existe]

---

## 1. Resumen ejecutivo
[3-5 líneas: qué problema, qué solución, qué valor aporta]

---

## 2. Descripción del problema

### 2.1 El problema
[Qué ocurre, dónde, con qué frecuencia]

### 2.2 Contexto y stakeholders
[Quién se ve afectado y cómo — tabla si hay varios perfiles]

### 2.3 Evidencia de fricción
[Datos concretos: tiempo, errores, volumen de tareas]

### 2.4 Coste actual estimado
[Tabla con cálculo: tiempo × coste hora = coste mensual/anual]

### 2.5 Nuevos problemas que podría generar la solución
[Tabla de riesgos secundarios honestos]

---

## 3. Definición del caso de uso y criterios de éxito

### 3.1 Caso de uso principal
[Situación concreta de uso: quién, qué hace, qué obtiene]

### 3.2 Ejemplo de uso real
[Input concreto que introduciría el usuario → output que genera la herramienta]

### 3.3 Criterios de éxito y KPIs
[Tabla: KPI principal + KPIs secundarios con metas]

---

## 4. Diseño de la solución (MVP)

### 4.1 Nombre y descripción
[Qué es, qué hace, qué NO hace todavía]

### 4.2 Flujo de la aplicación
[Entrada → Proceso → Salida, con ejemplo real]

### 4.3 Pantallas o secciones principales
[Tabla o lista de las vistas de la app]

### 4.4 Herramientas utilizadas
[Lista: Google Antigravity, HTML, JS, API de IA, GitHub Pages…]

### 4.5 Limitaciones del MVP
[Qué no hace, qué requiere revisión humana, qué falta]

---

## 5. Proceso de construcción (PoC)

### 5.1 Cómo se construyó
[Narración del proceso real: qué pasos se dieron, en qué orden]

### 5.2 Prompts utilizados
[Ejemplos reales o representativos de los prompts clave usados con la IA]

> Ejemplo de prompt usado:
> "Actúa como asistente de una gestoría. Recibe este email de cliente y devuelve:
> 1) tipo de consulta, 2) documentos necesarios, 3) respuesta sugerida en tono profesional."

### 5.3 Inspiración y referencias
[En qué se inspiró el alumno, qué ejemplos vio, qué recursos consultó]

### 5.4 Decisiones de diseño tomadas
[Por qué se eligió ese enfoque, qué alternativas se descartaron y por qué]

### 5.5 Dificultades encontradas y cómo se resolvieron
[Qué no funcionó al principio, qué se tuvo que cambiar]

---

## 6. Evaluación y resultados

### 6.1 Casos de prueba
[Tabla con los casos probados y resultado esperado vs obtenido]

### 6.2 Resultados obtenidos
[Tabla resumen: fichas útiles, clasificaciones correctas, tiempo antes/después]

### 6.3 Evaluación del KPI principal
[¿Se cumplió el objetivo? ¿En qué porcentaje?]

### 6.4 Problemas detectados y ajustes realizados
[Tabla: problema detectado → ajuste propuesto o realizado]

---

## 7. Responsabilidad y uso responsable de la IA

### 7.1 Riesgos identificados
[Tabla: riesgo → impacto → medida de control]

### 7.2 Privacidad y datos
[Qué datos maneja la herramienta, qué no debería introducirse]

### 7.3 Supervisión humana
[Qué decisiones quedan siempre en manos de una persona]

### 7.4 Transparencia
[Cómo se avisa al usuario de que hay IA detrás]

---

## 8. Plan de implantación y hoja de ruta

### 8.1 Pasos para llevar la solución a un entorno real
[Lista ordenada de acciones necesarias antes de producción]

### 8.2 Hoja de ruta
[Tabla: semana/mes → acción → objetivo]

### 8.3 Mejoras futuras
[Lista de funcionalidades que se añadirían en versiones posteriores]

---

## 9. Entrega

### 9.1 Componentes entregados
[Lista de archivos o elementos: código, README, capturas, vídeo, informe]

### 9.2 Enlace al prototipo
[URL de GitHub Pages u otra plataforma]

### 9.3 Repositorio
[URL del repositorio si existe]

---

## Conclusión

[3-5 líneas: qué demuestra el proyecto, qué valor tiene, qué aprendió el alumno]
```

---

## Paso 3 — Reglas de calidad del documento

Aplica siempre estas reglas al generar el informe:

**Contenido**
- Cada sección debe tener información real y específica del proyecto del alumno. Nunca rellenes con frases genéricas del tipo "la IA puede ayudar a mejorar la eficiencia".
- Los ejemplos de prompts deben ser concretos. Si el alumno no los recuerda exactamente, reconstruye uno plausible basado en su descripción y márcalo como "(ejemplo representativo)".
- El coste actual debe calcularse siempre con una tabla aunque los datos sean estimados. Indica si son estimaciones.
- Los KPIs deben tener metas numéricas cuando sea posible.

**Tono y formato**
- Tono profesional pero accesible. Sin jerga técnica sin explicar.
- Tablas para comparaciones, costes, stakeholders y riesgos.
- Prosa fluida para narrar el proceso de trabajo (sección 5).
- Nada de bullets donde una frase corra mejor.
- El documento debe poder leerse de corrido por alguien que no sabe de IA.

**Proceso de trabajo (sección 5) — es la sección más diferenciadora**
Esta sección convierte el informe en una memoria real de proceso, no solo en un formulario rellenado.
Debe narrar:
- El orden en que se construyó la solución
- Los prompts reales o representativos usados
- Las referencias o inspiraciones del alumno
- Las decisiones que se tomaron y por qué
- Lo que no funcionó y cómo se resolvió

Ejemplo de cómo debería sonar:

> "Para construir el generador de fichas, se partió de un prompt base que pedía a la IA actuar como redactor cultural del ayuntamiento. El primer intento producía textos demasiado largos, por lo que se añadió la instrucción 'responde en un máximo de 80 palabras'. La categorización automática se añadió en una segunda iteración tras comprobar que el personal necesitaba etiquetar cada actividad manualmente. La inspiración principal fue el ejemplo de gestoría contable del enunciado del proyecto."

---

## Paso 4 — Formato de salida

- Genera el documento en **Markdown** o **Web** según se haya expecificado. Con las características estéticas solicitadas.
- Indica al alumno que puede copiarlo a Google Docs o Word para exportarlo a PDF, o reconvertir el Markdown a HTML o el HTML a Markdown para añadir contenido en caso de necesidad.
- Si el entorno lo permite, ofrece también generarlo como archivo `.md`, `.pdf`, `.zip`(con html + css), `.docx` o `.ppdx`.
- Extensión orientativa: equivalente a 12-20 páginas A4 (aprox. 4.600- 8.000 palabras).
- Genera un `.md` llamado `resumen.md` con las respuestas y resumen para que en caso de volver a ejecutar el skill o workflow, no tener que volver a repetir toda la secuencia o hacerlo de forma más rapida.
---


