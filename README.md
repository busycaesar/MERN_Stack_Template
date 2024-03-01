# TODO

- [x] Backend: Unit Test
- [x] Backend: Lint Test
- [x] Backend: CI Pipeline for Unit and Lint testing
- [ ] Backend: Setup JS Doc with better-docs
- [ ] Frontend: Setup JS Doc with better-docs
- [ ] Description for settup up JSDoc
- [ ] Frontend: Install Bootstrap
- [ ] Frontend: Install Tailwind
- [ ] Backend: Description for all dependencies and scripts
- [ ] Frontend: Description for all dependencies and scripts
- [ ] Bifurcate descriptions

# MERN Stack Template (Currently in development!)

## Description

This repository servers as the starting point for MERN Stack project. This template repository eliminates the hassle of setting up your project from scratch by providing a pre-configured structure with all the essential libraries and configurations ready to go.

## Tech Stack

**Frontend**: React.js(Vite), JSDoc  
**Backend**: Node.js, Express.js, JSDoc  
**Database**: MongoDB

## Features

1. Jest for unit testing. (To be completed)
2. Supertest for testing APIs. (To be completed)
3. CI pipeline for checking lint errors and running tests (To be completed)
4. Function for fetching backend APIs from frontend using axios.

To prevent this template from being opinioniated in regards to styling library, it is not already configured with the project. However following are the steps to install various libraries, if required:

1. Bootstrap
2. Tailwindcss

## How to run the project

To use this template, clone this repo and start it in the code editor of choice.

Follow the below steps to install all the dependencies,

### Setup the project

1. Install all the backend dependencies. Run the following command from the backend directory.

```bash
npm install
```

2. Create a file with name '.env' for storing environment variables and paste the following code.

```
# NOTE: Replace the value of PORT and MONGODB_STRING with your own connection string.
PORT=8080
MONGODB_STRING=<Your connection string>
```

3. Install all the frontend dependencies. Run the following command from the frontend directory.

```bash
npm install
```

### Run the project

1. Start the backend server. Run the following command from the backend directory.

i. Run this command to start the server in development mode.

```bash
npm run dev
```

ii. Run this command to start the server.

```bash
npm start
```

Note: If the PORT value is not defined as enviroment variable, by default the server starts on port 8080.

2. Start the frontend server. Run the following command from the frontend directory.

```bash
npm run dev
```

### Generate Documents

Run the following command from the frontend/backend directory as required. Same command is used to generate the documentation for both the ends.

```bash
npm run docs
```
