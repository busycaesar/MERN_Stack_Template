# MERN Stack Template

## Description

This repository servers as the starting point for MERN Stack project. This template repository eliminates the hassle of setting up your project from scratch by providing a pre-configured structure with all the essential libraries and configurations ready to go.

## Tech Stack

**Frontend**: React.js(Vite), JSDoc  
**Backend**: Node.js, Express.js, JSDoc  
**Database**: MongoDB

## Features

1. GitHub Workflow: Runs lint test and jest test of Backend directory.

To prevent this template from being opinioniated in regards to styling library, no library is installed in the project. Following are the links to install various libraries compatable with the project.

1. <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction">Bootstrap</a>
2. <a href="https://tailwindcss.com/docs/guides/vite">Tailwindcss</a>

## How to run the project

To use this template, clone this repo and start it in the code editor of choice.

### Install dependencies

Use the following command to install all the dependencies from both Backend and Frontend.

```bash
npm install --legacy-peer-deps
```

### Update project code (Environment variables and CORS policy)

Create/Update the following files and add the content as described.

1. `Backend/.env`

```bash
# Add the PORT number where you want to run the backend server.
PORT=<PORT Number>
# Add the mongoDB connection string here
MONGODB_STRING=<Your connection string>
```

2. `Backend/src/app.js`

```javascript
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    // Add the URL where your frontend is hosted. Adding this allows the frontend to data from this backend server using APIs.
    origin: [<Frontend_URL>],
  })
);

app.use("/", require("./API"));

module.exports = app;

```

3. `Frontend/.env`

```bash
# Add the URL where the backend server is hosted.
# Note: Do not add '/' at the end of the URL.
VITE_BACKEND_DOMAIN=<Backend_Server_URL>
```

### Set up the project and documentation information

1. Project

To setup the project information, open `Frontend/package.json` and `Backend/package.json` file. Update the value of three keys in this file, that is, "name", "description", "author" and "repository" as required.

2. Documentation

The project has `Frontend/jsdoc.config.json` and `Backend/jsdoc.config.json` file which contains the configuration for using JSDoc for configuration. The documentation can be generated by using `npm run doc` command. Make sure comments are present in the code for generating documentation.

By default, it reads the comments from all the files, and directories under the directory `src/` recursively. If your code is stored in some other directory, you can change it by changing the value of source.inclue key of the config file.

Moreover, it generates the static website for documentation in a folder named 'documentation/' which is created under the root of the project. To change the name of the folder where static website is generated, change the value of opts.destination key from the config file.

Lastly, to setup the documentation information, update templates.better-docs.name, templates.better-docs.title and templates.better-docs.navLinks[0].href keys with the required value. To add to that, any other link can also be added on the navbar by adding items in the templates.better-docs.navLinks array.
