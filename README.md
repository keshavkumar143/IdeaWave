# ideaWave

Welcome to ideaWave, a full-featured blog website where users can create, edit, and delete their posts. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies for enhanced functionality and styling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Register, Login, Logout)
- Create, Edit, and Delete Posts
- View a list of posts with pagination
- View individual post details
- Responsive design using Tailwind CSS
- Notifications using Toastify

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- multer (for file uploads)
- cookie-parser
- dotenv

### Frontend Overview

- React
- React Router
- Axios
- Tailwind CSS
- Toastify
- date-fns

## Setup and Installation

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js
- npm or yarn
- MongoDB


### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/keshavkumar143/IdeaWave.git
cd MERN GRP
```

2. Navigate to the `backend` directory and install dependencies:

```bash
cd api
npm install
node/nodemon index.js
```

3. Create a `.env` file in the `api` directory and add the following environment variables:

```env
MONGO_URI=mongodb://127.0.0.1:27017/Blogwebsite
JWT_SECRET=your_jwt_secret
PORT=4000
```

4. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the `frontend` directory and install dependencies:

 ```bash
   cd client
   npm i
   ```

2. Start the frontend development server:

```bash
npm start
```

### Running the Application

Open your browser and navigate to `http://localhost:3000`.

## Backend Overview

The backend of ideaWave is built with Express.js and connects to a MongoDB database using Mongoose. It includes the following main features:

- User authentication with JWT
- CRUD operations for posts
- File uploads using multer

### Key Endpoints

- `POST /register`: Register a new user
- `POST /login`: Log in a user and issue a JWT
- `GET /profile`: Get the profile of the logged-in user
- `POST /logout`: Log out the current user
- `POST /post`: Create a new post
- `PUT /post`: Edit an existing post
- `DELETE /post/:id`: Delete a post
- `GET /post`: Get a list of posts
- `GET /post/:id`: Get a specific post by ID

## Frontend Overview

The frontend of ideaWave is built with React and styled using Tailwind CSS. It includes the following main features:

- User authentication with JWT
- CRUD operations for posts
- Notifications using Toastify
- Routing with React Router

### Key Components

- `App.js`: Main application component with routing
- `Post.js`: Component to display a single post
- `PostList.js`: Component to display a list of posts
- `CreatePost.js`: Component to create a new post
- `EditPost.js`: Component to edit an existing post
- `Profile.js`: Component to display user profile

## Environment Variables

The application uses the following environment variables:

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT
- `PORT`: Port for the backend server

## Screenshots
![Register Page](https://github.com/user-attachments/assets/8da2795e-4bb8-4363-8b3b-29fbbc19418a)
![Login Page](https://github.com/user-attachments/assets/caeabb9f-1b5a-4be7-bacf-012c2aeb407a)
![Home Page](https://github.com/user-attachments/assets/6da80556-8bf6-4ce9-a67b-5fb4b398c3a8)
![Create Post](https://github.com/user-attachments/assets/64bb96bb-cefd-412f-ae1a-875cd6cca8cf)
![Post Page](https://github.com/user-attachments/assets/b5390a20-18c6-4572-b8b6-a1979a688f06)
![Edit Post](https://github.com/user-attachments/assets/c7b03197-277c-47e3-a70f-b92f1047313c)
