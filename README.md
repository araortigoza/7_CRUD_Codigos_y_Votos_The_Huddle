# 🗳️ CRUD Códigos y Votos

Aplicación web tipo "foro de enlaces" permite crear temas, agregar enlaces dentro de cada tema, y votar tanto temas como enlaces. Hecha con **Node.js**, **Express**, **EJS** y **Prisma** sobre una base de datos **PostgreSQL**.

## 📋 Descripción

La aplicación gira en torno a dos entidades relacionadas:

- **Tema**: tiene un título y una cantidad de votos.
- **Enlace**: pertenece a un tema (relación uno a muchos), tiene una URL y su propia cantidad de votos. Al eliminar un tema, sus enlaces se eliminan en cascada.

### Funcionalidad

- Ver todos los temas en la página principal, cada uno con sus enlaces, ordenados de mayor a menor cantidad de votos.
- Crear un nuevo tema desde un formulario dedicado.
- Editar y eliminar temas y enlaces.
- Votar por un tema o por un enlace específico (suma un voto).
- Agregar nuevos enlaces a un tema existente.

### Rutas principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/` | Muestra todos los temas junto con sus enlaces. |
| `GET` | `/temas/nuevo` | Muestra el formulario para crear un nuevo tema. |
| `POST` | `/temas` | Crea un nuevo tema. |
| `PUT` | `/temas/:id` | Actualiza el título de un tema. |
| `DELETE` | `/temas/:id` | Elimina un tema (y sus enlaces, en cascada). |
| `POST` | `/temas/:id/votar` | Suma un voto al tema. |
| `POST` | `/enlaces` | Crea un nuevo enlace dentro de un tema. |
| `PUT` | `/enlaces/:id` | Actualiza la URL de un enlace. |
| `DELETE` | `/enlaces/:id` | Elimina un enlace. |
| `POST` | `/enlaces/:id/votar` | Suma un voto al enlace. |

## ⚙️ Requisitos

- Node.js
- Una base de datos PostgreSQL accesible (local o remota)
- Dependencias del proyecto (ya listadas en `package.json`):
  - `express`
  - `ejs`
  - `@prisma/client`
  - `dotenv`
  - `prisma` (como dependencia de desarrollo, para generar el cliente y correr migraciones)

Instalación de dependencias:

```bash
npm install
```

### Variables de entorno

Este proyecto usa un archivo `.env` (no incluido, por seguridad) con al menos las siguientes variables:

```
DATABASE_URL="postgresql://usuario:contraseña@host:puerto/nombre_basededatos"
PORT=3000
```

## 🚀 Cómo ejecutar

1. Instalar las dependencias:

```bash
npm install
```

2. Configurar el archivo `.env` con la URL de conexión a PostgreSQL y el puerto deseado.

3. Generar el cliente de Prisma y aplicar las migraciones existentes:

```bash
npx prisma generate
npx prisma migrate deploy
```

4. Iniciar el servidor:

```bash
npm run dev
```

El servidor queda escuchando en `http://localhost:<PORT>` (según lo definido en `.env`).

## 🧠 Detalles técnicos

- El acceso a datos está completamente delegado a **Prisma Client**, por lo que no hay consultas SQL manuales en el código de la aplicación (más allá de las migraciones generadas por Prisma).
- Los temas se traen siempre junto con sus enlaces (`include: { enlaces: ... }`), y tanto temas como enlaces se ordenan por cantidad de votos de forma descendente, de modo que lo más votado siempre aparece primero.
- Los votos se incrementan de forma atómica en la base de datos usando `data: { votos: { increment: 1 } }`, evitando condiciones de carrera al leer y luego escribir el valor.
- Los controladores de creación de tema y edición/eliminación/voto usan distintos tipos de respuesta: crear un tema redirige (`res.redirect('/')`) porque se accede desde un formulario tradicional, mientras que el resto de las acciones responden con JSON (`res.json({ ok: true })`), pensadas para ser llamadas desde JavaScript del lado del cliente (los archivos en `public/js/`).
