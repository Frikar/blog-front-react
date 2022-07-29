# Blog front y backend
<img height="600" src="https://raw.githubusercontent.com/Frikar/blog-front-react/main/banner.png"/>
Proyecto realizado con el stack MERN creando un blog con funcionalidad de CRUD, Unit Testing y variables de entorno

Puedes ver una versión publicada del proyecto en esta url:

[Ver versión live](https://blog-front-react-dev.up.railway.app/)

<!-- TOC -->
* [Blog front y backend](#blog-front-y-backend)
  * [Como iniciar el backend:](#como-iniciar-el-backend)
  * [Como iniciar el frontend:](#como-iniciar-el-frontend)
<!-- TOC -->

## Como iniciar el backend:

Clona el proyecto de la API:
```bash
$ git clone https://github.com/Frikar/blog-api-node.git
```
---

Instala las dependencias:
```bash  
$ npm i
```
---

Crea la base de datos:

Debido a que se uso MongoDB como base de datos, se puede crear un cluster en MongoDB Atlas o usar algun hosting de preferencia

Yo utilicé en todo momento **Railway** debido a que permite obtener una instancia de MongoDB de manera gratis sin necesidad de registro

---

Crea un archivo .env para la API:
```
DATABASE_URL=urlMongo
PORT=4000
DELETE_ON_CREATE=True //Se recomienda crear esta variable para realizar las primeras pruebas
```
---

Inicia el servidor:
```bash
$ npm run start
```
Luego de este paso se puede acceder a las rutas de la API de la siguiente manera:

- Ruta de usuarios: http://localhost:4000/api/users
- Ruta de Posts: http://localhost:4000/api/posts

*Los nombres de las rutas son parecidos a los usados por jsonplaceholder*

---

## Como iniciar el frontend:

Clona el proyecto de React:
```bash
$ git clone https://github.com/Frikar/blog-front-react.git
```
---

Instala las dependencias:
```bash  
$ npm i
```
---

Crea un archivo .env con la siguiente variable de entorno:
```
REACT_APP_API_URL=http://localhost:4000/api
```
---
Mientras cuentas con tu servidor de Express en funcionamiento, realiza los unit tests:
```bash  
$ npm run test
```
---
Inicia la app en React:
```bash
$ npm run start
```
Podras realizar el funcionamiento del CRUD con los post disponibles o crear los tuyos propios

