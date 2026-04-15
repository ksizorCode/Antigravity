# Funcionalidades Especiales de Antigravity

Documentación oficial:
https://codelabs.developers.google.com/getting-started-with-antigravity-skills?hl=es-419#0  


## Prompts
Ademas de dar las típicas instrucciones, también podemos:
- Arrastrar archivos externos como referencias (JPGs, PDFs, etc..)
- URLs de páginas web
- Referencia a Lína de código: index.html#L16 

## Trabajar con Agentes
### Personalización de Agentes
#### Reglas / Rules
Normas que los Agentes seguirán cada vez que tengan que llevar a cabo una tarea

Pueden ser:
- Tipo Globales: Se usarán en todos los Proyectos o Workflows
- Tipo Workflow: Se utilizarán únicamente en el Proyecto desde el que haya sido creado.

Modo de Activación:
- Manual - Han de ser activadas manualmente usando @mencion en el prompt del agente.
- Always On - Siempre activo. Estas reglas siempre serán aplicadas. No hay que mencionarlas.
- Model Decision - La ia tomará la decisión de si utilizarlo o no. Esta opción pide una breve descripción.
- Glob - Estas reglas se aplican a archivos de tipo plantilla o glob pattern

Ejemplos:
- Código limpio, bien estructurado, escalable y reutilizable.
- Añade coemntarios descriptivos en todas las funciones estilo javadocs, haz separadores visuales y usa emoticonos para que sea más ameno a la hora de revisar el código. Añade a readme.md el resumen con los datos importantes del proyecto por si este proyecto se hereda o hay que realizar cambios, de tal forma que pueda ser un buen índice de contenidos y mantanimiento para futuros programadores o agentes. Haz un esquema arbol de carpetas y archivos y explica para que vale cada uno. Puedes usar tablas y mermaid para que sea más visual y explicativo.


#### Workflows
Flujos de trabajo que sólo se ejecutarán cuando los mencionemos en el prompt: `/nombreWorkflow`
Ideal para tareas repetitivas.

Al igual que las reglas pueden ser 
- Tipo Globales:
- Tipo Workflow:


Ejemplso:
- Revisa la seguridad par evitar posibles ataques o hackeos, inecciones de código...
- Añade una estética inspirada en Apple Liquid Glass y estilo Apple iOS moderno. Añade webkit donde lo veas oportuno
- Añade una estética inspirada en Google Material Design y estilos Google Android moderno.
- Añade Iconos de FontAwesome y tipografías de Google Fonts
- Revisa todo el código para optimizar el SEO, revisa el DOM, correcta gerarquía de la información, añade metaetiquetas, Opengraph
- Añade los elementos necesarios para convertir al web en una Progresive Web Apllication (PWA) con un manifest.

## MCP Server
Conexiones con otras inteligencias artificiales o sistemas de trabajo para potenciar las funcionalidades entre herramientas



## Artefactos



## Skills






