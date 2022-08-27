# Image Processing Application
This project was built with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/), [Sharp](https://sharp.pixelplumbing.com/) as an **Image processing** and [Jasmine](https://jasmine.github.io/index.html) as a **Unit testing** tool

## Table of contents

- [Getting Started](#getting-started)

### Getting Started (development Usage)

- Install the latest LTS versions of Node.js from https://nodejs.org and npm from https://www.npmjs.com/.

- Clone the project on your machine, then from the terminal window go to the application directory then run the following command `npm install` to install the dependencies as defined in the package.json file.

- Then run `npm start` from root directory and it will run the server on `http://localhost:4000`.

#### Architecture

Form `src` directory:

- `/routes` holds all endpoints for the apploication.

- `/tests` holds all unit tests files.

- `/utils` holds whatever utilities and helpers functions in the application.

#### Linting

- [Eslint](https://eslint.org/)

Run the following command to detect the warnings and the errors
```
npm run lint
```
For fixing eslint errors & warnings run the command below:
```
npm run lint:fix
```

#### Testing

Run the following command to test the app
```
npm run test
```

#### Build

Run the following command to test the app
```
npm run build
```
