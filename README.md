# **MERN Stack Student Grades Analyzer and Visualization Project**

#### This is a full-stack web application that analyzes student grades and visualizes them using React charts. It uses the MERN stack - MongoDB, Express, React, and Node.js - to provide a complete solution for managing and analyzing student grades.

### **Features**
- User authentication and authorization using BcryptJs
- CRUD operations for managing students, classes, and grades
- Ability to upload student data from Client UI
- Visualization of student grades using various types of charts
- Search and filter functionality to easily find student and class data

### **Technologies Used**
- MongoDB for database management
- Express.js for building the backend API
- React for building the frontend UI
- Node.js for server-side scripting
- BrcyptJs for user authentication and authorization
- React chart libraries such as Recharts and Chart.js for data visualization
- Tailwind and Flowbite for UI design

## **Getting Started**
To run this project on your local machine, follow these steps:

1) Clone the repository to your local machine.
2) Install the necessary dependencies using npm install command in both the root directory and client directory.
3) Run the backend server using ```node index.js``` command in the root directory.
4) Run the frontend UI using ```npm start``` command in the client directory.
5) The application will be available at http://localhost:3000/.

### **API Endpoints**
The following API endpoints are available for performing CRUD operations:

**Students**

- ```GET /api/students``` - get all students
- ```POST /api/students``` - create a new student
- ```GET /api/students/:id``` - get a student by ID
- ```PATCH /api/students/:id``` - update a student by ID
- ```DELETE /api/students/:id``` - delete a student by ID

**Users**

- ```GET /api/users/login``` - Get an user
- ```POST /api/users/reg``` - Add a new user


