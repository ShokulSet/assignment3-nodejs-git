# Assignment 3 - Node.js REST API

A simple REST API built with Node.js and Express for Assignment #3.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the server:
```bash
node server.js
```

The server will run on `http://localhost:3000`

## API Endpoints

- `GET /` - Welcome message
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Example Usage with Postman

### Get all users
```
GET http://localhost:3000/users
```

### Create a new user
```
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "New User",
  "email": "newuser@example.com"
}
```