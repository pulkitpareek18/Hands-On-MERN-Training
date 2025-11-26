# 📝 TaskMaster-Kriti  
A full-stack MERN task management system supporting user registration, login, and complete task CRUD functionality — with secure authentication.

---

## 🚀 Tech Stack

### Frontend
- React  
- Vite  
- Tailwind CSS  
- Axios  
- React Router DOM  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  
- cors  
- jsonwebtoken  
- cookie-parser  
- nodemon  

---

## 🔥 Features

✔ Register new users  
✔ Login with authentication  
✔ JWT token-based security  
✔ Secure cookie storage  
✔ Protected API routes  
✔ Create / View / Edit / Delete tasks  
✔ Clean UI built with Tailwind  
✔ React component-based structure  
✔ MongoDB persistence  
✔ Error-safe and scalable backend  

---

## 📂 Project Structure

TaskMaster-Kriti/
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── middleware/
│ ├── routes/
│ ├── server.js
│ ├── package.json
│ ├── .env
│
└── README.md

---

## 🔐 Authentication Logic

- On login, a JWT token is generated  
- Token is stored in secure HTTP-Only cookies  
- All protected routes verify the JWT  
- Without a valid token → access denied  

---

## 🛠️ Installation Steps

1. Clone the repository  
```bash
git clone https://github.com/<your-username>/TaskMaster-Kriti.git

2. Navigate into the project directory

cd TaskMaster-Kriti

3. Setup backend environment variables
Create /backend/.env file

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=3000

4. Install backend dependencies
cd backend
npm install

5. Start backend server
npm run dev

6. Install frontend dependencies
cd ../frontend
npm install

7.cStart frontend server
npm run dev

8. Open the app in browser


👩‍💻 Author
Created by Kriti Pansari

## 💛 Thank You

Thank you for exploring **TaskMaster-Kriti**! Your interest, suggestions, and support truly mean a lot.  
If you found this project useful or inspiring, please consider giving it a ⭐ on GitHub — it really motivates development and future improvements!

---