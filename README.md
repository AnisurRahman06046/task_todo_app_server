# Task :  Basic CRUD Operation - TODO

This project is a Todo application built using NestJS, TypeScript,  Mongoose, and MongoDB. The API allows you to manage todos with CRUD operations, including bulk addition, archive, restore and soft deletion.

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/AnisurRahman06046/task_todo_app_server.git
cd task_todo_app_server
```

### 2. Install dependencies:

```bash
npm install
```
### 3. Set up environment variables:
Create a `.env` file in the root directory and copy the necessary variable from `.env.example` add your MongoDB connection string and other necessary environment variables.
```bash
DB_URL=mongodb://localhost:27017
```
### 4. Run the application::
```bash
npm run start:dev
```

## API Endpoints
### Base URL 
```bash
http://localhost:3000/todo/
```

### Add a Todo
- `Endpoint`: POST /add
- `Description`: Adds a new todo.
- Request Body:
```bash
{
  "title": "string",
  "description": "string"
}
```
- Response:
```bash
{
    "status": 201,
    "message": "Todo is added",
    "data": {
        "title": "Api connection",
        "description": "create api",
        "isDeleted": false,
        "archived": false,
        "_id": "6666fc52492b07915e927fa1",
        "createdAt": "2024-06-10T13:14:58.028Z",
        "updatedAt": "2024-06-10T13:14:58.028Z",
        "__v": 0
    }
}
```
## Livesite Link (deployed in vercel) :
#### Base Url :  https://todo-app-steel-mu-38.vercel.app/
### Api's:
#### 1. Create (Post) : https://todo-app-steel-mu-38.vercel.app/todo/add
#### 2. Bulk add (Post) : https://todo-app-steel-mu-38.vercel.app/todo/bulk-add
#### 3. All Todos (Get) : https://todo-app-steel-mu-38.vercel.app/todo/all-todos
#### 4. Single Todo (Get) : https://todo-app-steel-mu-38.vercel.app/todo/${id}
#### 5. Update (Patch) : https://todo-app-steel-mu-38.vercel.app/todo/${id}
#### 6. Delete (Delete) : https://todo-app-steel-mu-38.vercel.app/todo/${id}
#### 7. Add to archive (Patch) : https://todo-app-steel-mu-38.vercel.app/todo/archive/${id}
#### 8. Restore (Patch) : https://todo-app-steel-mu-38.vercel.app/todo/restore/${id}
#### 9. All archived (Get) : https://todo-app-steel-mu-38.vercel.app/todo/all-archived


## Postman collection : [Download](https://elements.getpostman.com/redirect?entityId=28380443-ed8b4f3d-f757-45c0-90fb-bebf6efa5d53&entityType=collection)

## Postman collection with Livesite environment : [Download](https://elements.getpostman.com/redirect?entityId=28380443-ed8b4f3d-f757-45c0-90fb-bebf6efa5d53&entityType=collection)



