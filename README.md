# 📌Proyecto: Registro de Estudiantes con useReducer + ContextAPI

Este es un proyecto de demostración de desarrollo con **React** y **TypeScript**, utilizando **useReducer** y **ContextAPI** para la gestion del estado. Además, se ha empleado **TailwindCSSS** para el diseño y estilización de la interfaz.


## 📖 Descripción

Este proyecto fue realizado en **un día y medio** con el propósito de practicar y reforzar el uso de **useReducer** y **ContextAPI** en React.

## 🔹 Funcionalidad

La aplicación permite gestionar un **registro de estudiantes**, proporcionando las siguientes caracteristicas

* ✅ **Agregar** nuevos estudiantes.
* ✏️ **Modificar** los datos de un estudiante existente.
* 🗑️ **Eliminar** estudiantes de la lista de manera independiente.
* 🛡️ **Validación de formularios** al agregar o actualizar registros.

### 🔹Estructura del estado

* Se utiliza un **estado global con useState en el Context**, representado por `estudiante` y `setEstudiante`, el cual almacena los valores ingresados por el usuario en los formularios y permite que cualquier componente pueda acceder y modificar estos datos fácilmente. 

* Adicionalmente, el **estado global con useReducer** gestiona las funcionalidades principales de la aplicación, como la adición, modificación y eliminación de estudiantes en la lista.

Este protecto es una muestra práctica de las habilidades adquiridas en un curso de Udemy. 


## 🛠️ Dependencias utilizadas  

A continuación, se listan las dependencias empleadas en este proyecto:  

| Dependencia | Descripción |
|------------|------------|
| [**react-date-picker**](https://www.npmjs.com/package/react-date-picker) | Selector de fecha interactivo para React. |
| [**react-calendar**](https://www.npmjs.com/package/react-calendar) | Componente de calendario simple y personalizable. |
| [**uuid**](https://www.npmjs.com/package/uuid) + [**@types/uuid**](https://www.npmjs.com/package/@types/uuid) | Generación de identificadores únicos (UUID). |
| [**@headlessui/react**](https://www.npmjs.com/package/@headlessui/react) | Componentes accesibles y sin estilos para UI. |
| [**@heroicons/react**](https://www.npmjs.com/package/@heroicons/react) | Colección de íconos optimizados para React. |

---

***✨ Gracias por leer! 😃***
---
[ver sitio en Netlify] (https://registro-estudiantes-usereducer-sr.netlify.app/)

**Por: Sergio Romero**
