## Introduction
Welcome to the MERN Blogging Website project! This README file will guide you through the steps to set up and run the application on your local machine.This MERN (MongoDB, Express.js, React, Node.js) blogging website offers a comprehensive platform for users to share their thoughts and engage with others.

## Features
- Authentication and User Management: Secure login and signup processes ensure proper authentication for different user types, utilizing JWT for session management.

- Profile Management: Users can update their profile information, including avatars and personal details.
  
- Engagement Features:
  
  `Like`: Users can like blog posts.

  `Comment`: Users can comment on blog posts, fostering community interaction.
  
  `Search Functionality`: Users can search for blog posts based on keywords or tags, ensuring easy access to content.

- Theme Options: The website includes both light and dark themes for a customizable user experience.

- Admin Dashboard:

  `Overview`: A centralized admin panel displaying key metrics like total blogs, registered users, total comments, and total likes.
  
  `Management`: Admins can view all blog posts and user profiles. They have the authority to delete any blog post or user, maintaining the platform's integrity.

## Pre-Requisites
Before you begin, ensure you have the following installed:

- Node.js
- MongoDB
- Git

## Installation

- Clone the repository:
  
  ```sh
  git clone https://github.com/your-username/BlogStream-MERN_application.git
  cd BlogStream-MERN_application
  ```
- Install dependencies:

For the backend (Node.js/Express):
  ```sh
  cd backend
  npm install
  ```
For the frontend (React):
  ```sh
  cd ../frontend
  npm install
  ```

## Configuration
- Backend Configuration:

  Create a .env file in the root directory with the following environment variables:
  ```sh
  MONGO=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```
- Frontend Configuration:

  Create a .env file in the frontend directory with the following environment variables:
  ```sh
  VITE_FIREBASE_API_KEY = your_firebase_key
  ```

## Running the Application
  - Start the backend server:
    ```sh
    cd backend
    npm run dev
    ```
  - Start the frontend server:

    Open a new terminal window and run:
    ```sh
    cd frontend
    npm start
    ```
- Access the application:
  
  Open your browser and go to http://localhost:5173.

## Demo
The project is live at - https://blog-stream.onrender.com/
