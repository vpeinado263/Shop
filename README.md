## 6ta-Tarea-REACT-NEXT.JS

## Descripción del Proyecto:

Este proyecto implementa un carrito de compras simple usando React y Next.js. El objetivo principal es aplicar conceptos clave de React y manejo de estado para crear un flujo básico de un carrito de compras. La implementación del carrito sigue un enfoque algorítmico y coloquial.

## Persistencia de Datos

Anteriormente, los datos del carrito estaban hardcodeados en el estado inicial (shoppingInitialState). Ahora, hemos eliminado la base de datos estática y configurado la aplicación para consumir los datos desde un servidor. Esto permite que los datos del carrito persistan incluso después de recargar la página.

Para lograrlo , integré una API falsa utilizando JSONPlaceholder. Esta API proporciona datos simulados y nos permite practicar el uso de peticiones HTTP sin necesidad de un backend real.

Se utiliza el comando json-server para simular una API RESTful.
La base de datos de productos y el carrito se consumen directamente desde el servidor en lugar de ser almacenados en el estado inicial.

## JSONPlaceholder y API Falsa

Se configuró un endpoint para consumir datos de productos y carrito utilizando la herramienta json-server.

## Configuración del Servidor Fake:

## Creamos un script en package.json para iniciar el servidor de la API falsa:

json
Copiar código
"scripts": {
"apifake": "json-server --watch db.json --port 5000"
}
Esto levanta un servidor local en el puerto 5000 que expone dos endpoints:

/productos: Para consumir los productos disponibles.
/carrito: Para gestionar el carrito de compras.
Modificaciones en el Reducer
Se modificó el shoppingReducer para agregar nuevas funcionalidades relacionadas con los datos consumidos desde los endpoints. Esto incluye:
Actualización de los productos en el estado después de obtenerlos desde la API.
Manejo del carrito utilizando los datos del servidor.

## Aprendizajes y Nuevas Funcionalidades

Manejo de API Falsa: Aprendí a trabajar con JSONPlaceholder y json-server para simular una API RESTful. Esto me permitió practicar el consumo de datos a través de peticiones HTTP (GET), lo que es igual tanto para APIs falsas como reales.

## Endpoints para Productos y Carrito: Ahora los productos y el carrito se gestionan a través de dos endpoints separados:

Persistencia de Datos en el Carrito: Gracias al servidor falso, los datos del carrito ahora persisten entre recargas de la página, lo que mejora la experiencia del usuario al mantener su carrito de compras intacto.

Configuración de la API: Aprendí cómo configurar y gestionar un servidor falso con json-server, lo cual es útil tanto para probar el front-end sin depender de un backend real como para aprender sobre el manejo de peticiones en general.

## Método find: Busca un elemento en un arreglo que cumpla con una condición, en este caso, una coincidencia en el ID del producto.

## Estructuras de control (if, else): Valida condiciones sobre la cantidad y existencia del producto en el carrito para tomar decisiones sobre su manejo.

## Reflexiones y Buenas Prácticas

Durante el desarrollo del proyecto, se identificaron algunas buenas prácticas y reflexiones importantes:
No mezclar conceptos: Es crucial diferenciar el uso de IDs en objetos y componentes en React, ya que un mal manejo puede causar errores de duplicidad.
Persistencia de datos: Con la implementación de la API falsa, aprendí cómo hacer que los datos persistan entre recargas de la página utilizando un servidor backend simulado.

## Optimizar imágenes: Utilicé el componente <Image /> de Next.js para mejorar el rendimiento y la carga de las imágenes.

Usar key en listas de componentes en React: Esto ayuda a identificar de manera única cada elemento y mejora la eficiencia del renderizado.
Configurar dominios externos en next.config.js: Esto permite cargar imágenes de fuentes externas de forma segura.

## Concurrently

Esta herramienta permite ejecutar múltiples comandos en paralelo con un solo script.

in process : https://6ta-tarea-react-next-1e3yvlp76-vhp-projects-694c293c.vercel.app/
