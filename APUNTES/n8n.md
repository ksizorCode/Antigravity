# N8N

## Instalación (en local):
Existen dos opciones: instaldación con Docker e instalación manual.

Opción A: con Docker

1. Tener instalado Docker
2. insertar siguiente comando en terminal:
```bach
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```
3. Lanzar servidor local: http://localhost:5678

(Opción A2)
```bach
docker run -d \
  --name n8n \
  -p 5678:5678 \
  -e N8N_BASIC_AUTH_ACTIVE=true \
  -e N8N_BASIC_AUTH_USER=admin \
  -e N8N_BASIC_AUTH_PASSWORD=tu_password \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Opción B: Instalación con Node.js (clásica)
1. Tener node y NPM (Node Package Manager):
Para revisar si ya están instalados preguntaremos en las versiones de cada uno en la  terminar:

| Comando       | Respuesta esperada                                 |
|---------------|----------------------------------------------------|
|```node -v```  | Si está instalado devolverá algo tipo: `v24.14.0`  |
|```npm -v```   | Si está instalado devolverá algo tpo:  `11.9.0`    |
Si no está instalado descargaremos node.js de al web oficial, y podemos instalar npm desde terminal: `npm install -g npm`


Cómo instalar Node.js en Windows: [Ver video en Youtube](https://www.youtube.com/watch?v=M9N7yT4S9s)
Qué es NPM y para qué sirve: [Ver video en Youtube](https://youtu.be/FLAUD2lId4U)

2. Instalar N8N viaTerminal:
``´
npm install n8n -g
```

