# Proyecto Test KS2

Este proyecto es una aplicación full-stack que permite gestionar usuarios. La aplicación está dividida en un frontend desarrollado con React y Vite, y un backend desarrollado con Express y PostgreSQL.

## Contenido

1. [Instalación](#instalación)
2. [Ejecución del proyecto](#ejecución-del-proyecto)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Flujo de la aplicación](#flujo-de-la-aplicación)
5. [Configuración de la base de datos](#configuración-de-la-base-de-datos)

## Instalación

Para instalar el proyecto, sigue estos pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/ParkerPiter/test-ks2.git
    cd test-ks2
    ```

2. Instala las dependencias del frontend y del backend:

    ```bash
    cd front-ks2-test
    npm install
    cd ../backend-ks2-test
    npm install
    ```

## Ejecución del proyecto

Para iniciar el proyecto, sigue estos pasos:

1. Inicia el backend:

    ```bash
    cd backend-ks2-test
    npm start
    ```

2. Inicia el frontend:

    ```bash
    cd ../front-ks2-test
    npm run dev
    ```

## Flujo de la aplicación

1. **Lista de Usuarios**:
    - Muestra todos los usuarios en la base de datos.
    - Permite seleccionar un usuario para ver sus detalles.

2. **Crear Usuario**:
    - Permite añadir un nuevo usuario a la base de datos.
    - Formulario para ingresar nombre y email.

3. **Ver Detalles del Usuario**:
    - Muestra los detalles de un usuario específico.
    - Botón para editar la información del usuario.

4. **Editar Usuario**:
    - Permite modificar el nombre y el email del usuario seleccionado.

5. **Eliminar Usuario**:
    - Permite eliminar un usuario de la lista.

## Configuración de la base de datos

1. **Crear la base de datos**:
   - Se recomienda crear una base de datos en PostgreSQL con el nombre deseado.

2. **Configurar el archivo `.env`**:
   - Crear un archivo `.env` en la raíz del directorio `backend-ks2-test` con las siguientes variables:

    ```env
    DB_NAME=nombre_de_tu_base_de_datos
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_HOST=localhost
    ```

   - Asegúrate de que los valores de estas variables coincidan con tu configuración de PostgreSQL.

¡Eso es todo! Con esta configuración y estructura, deberías estar listo para ejecutar y desarrollar el proyecto. Si tienes alguna duda o problema, no dudes en preguntar.
