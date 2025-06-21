#  Student CRUD API (No Database)

This is a simple Student Management API made with **Node.js** and **Express.js**. It performs basic CRUD operations using a plain JavaScript **array of objects** as the data source — no database is used.

---

##  Features

- Add new student
- View all students
- View a student by ID
- Update student by ID
- Delete student by ID



## Tech Stack

- Node.js
- Express.js



##  How to Run

1. Clone the repo:

git clone https://github.com/deepika12-it/Student-CRUD.git


2. Move into the project folder:

cd Student-CRUD


3. Install dependencies:

npm install

4. Start the server:

node index.js


---

## 🧪 API Endpoints

| Method | Route             | Action             |
|--------|-------------------|--------------------|
| POST   | `/students`       | Add new student    |
| GET    | `/students`       | Get all students   |
| GET    | `/students/:id`   | Get student by ID  |
| PUT    | `/students/:id`   | Update student     |
| DELETE | `/students/:id`   | Delete student     |

---

##  Sample Student Object

```json
{
  "id": 1,
  "name": "Deepika",
  "email": "deepika@gmail.com",
  "course": "IT"
}
```

---

##  Note

This project stores data in memory only. If the server restarts, all student data will be lost.
