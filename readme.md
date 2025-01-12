# Notes Application (MERN Stack)

This is a **Notes Application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create, read, update, and delete notes with features like category filtering and secure authentication.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [How to Use the Application](#how-to-use-the-application)
5. [Testing Instructions](#testing-instructions)
6. [Troubleshooting Tips](#troubleshooting-tips)
7. [Contributing](#contributing)


---

## Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (version 16.x or higher)
- **npm** or **yarn**
- **MongoDB** (Local or cloud instance, e.g., MongoDB Atlas)
- A code editor like **VS Code**

---

## Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ritesh25033/Notes-app.git
   cd Notes-app/backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   - Create a `.env` file in the `backend/` directory.
   - Add the following environment variables:
     ```env
     PORT=5000
     MONGODB_URI=<Your MongoDB URI>
     JWT_SECRET=<Your JWT Secret>
     FRONTEND_URL=http://localhost:3000
     ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

---

## Frontend Setup

1. **Navigate to the Frontend Folder**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   - Create a `.env` file in the `frontend/` directory.
   - Add the following variable:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```

4. **Run the React App**:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## How to Use the Application

1. **Sign Up**:
   - Open the app in your browser at `http://localhost:3000`.
   - Create a new account by signing up.

2. **Log In**:
   - Log in using your registered credentials.

3. **Manage Notes**:
   - Add, view, edit, delete, and filter notes by category.

4. **Profile Management**:
   - Update your user profile information.

---

## Testing Instructions

1. **Test API Endpoints**:
   - Use tools like **Postman** or **Insomnia** to test backend endpoints.
   - Ensure you include a valid **Bearer Token** for protected routes.

2. **Test Frontend**:
   - Navigate through the app and perform actions like signup, login, and CRUD operations.

---

## Troubleshooting Tips

- **CORS Issues**:
  Ensure the `FRONTEND_URL` in the backend `.env` file matches your frontend URL.

- **MongoDB Connection Errors**:
  Check if the `MONGODB_URI` is correctly configured and MongoDB is running.

- **Environment Variables**:
  Make sure `.env` files are created in both `backend/` and `frontend/`.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


---

Feel free to suggest any changes or improvements to this documentation!

