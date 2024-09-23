# Social-Network-API

## Description

This project is a backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, MongoDB as the database, and Mongoose as the ODM (Object Document Mapper).

## Demo Vid

https://drive.google.com/file/d/13rgVTrLybbY2YcAbOyLvUF6_1_26rD7J/view?usp=sharing

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Acknowledgments](#acknowledgments)
- [Questions](#questions)

## Installation

To install and run this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all dependencies.
4. Ensure MongoDB is installed and running on your machine.
5. Run `npm start` to start the server.

## Usage

Once the server is running, you can use an API testing tool like Insomnia or Postman to test the various API routes.

## API Routes

### Users

- GET `/api/users` - Get all users
- GET `/api/users/:userId` - Get a single user by ID
- POST `/api/users` - Create a new user
- PUT `/api/users/:userId` - Update a user
- DELETE `/api/users/:userId` - Delete a user

### Friends

- POST `/api/users/:userId/friends/:friendId` - Add a friend
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend

### Thoughts

- GET `/api/thoughts` - Get all thoughts
- GET `/api/thoughts/:thoughtId` - Get a single thought by ID
- POST `/api/thoughts` - Create a new thought
- PUT `/api/thoughts/:thoughtId` - Update a thought
- DELETE `/api/thoughts/:thoughtId` - Delete a thought

### Reactions

- POST `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Acknowledgments

- Assisted by Amazon Q

## Questions

If you have any questions about this project, please open an issue or contact me directly at [turriettaa@gmail.com].

You can find more of my work at [turriettaa](https://github.com/turriettaa).
