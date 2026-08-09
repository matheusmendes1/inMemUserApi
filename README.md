# NestJS In-Memory User Management API

An API built with Node.js and NestJS for basic user management, created for the API Development course.

## Group Members

- Matheus dos Santos Mendes
- Nicoli Castro Ferreira 

## Features

- **POST /users**: Create a new user (`name`, `email`).
- **GET /users**: Retrieve all stored users.
- **GET /users/:id**: Fetch a specific user by ID.
- **DELETE /users/:id**: Delete a user by ID.

> **Note:** Data is stored in-memory (using a Node.js array) and will reset if the server restarts.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <YOUR-GITHUB-REPOSITORY-URL>
   cd <REPOSITORY-NAME>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run start:dev
   ```

4. The server will start on `http://localhost:3000`.

## Testing the Endpoints

### 1. Create User
- **Method:** `POST`
- **URL:** `http://localhost:3000/users`
- **Body (JSON):**
  ```json
  {
    "name": "Alex Smith",
    "email": "alex.smith@example.com"
  }
  ```

### 2. Get All Users
- **Method:** `GET`
- **URL:** `http://localhost:3000/users`

### 3. Get User by ID
- **Method:** `GET`
- **URL:** `http://localhost:3000/users/1`

### 4. Delete User by ID
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/users/1`