# Orginse-my-js

This project was bootstrapped with [Learn](https://github.com/lerna/lerna) and [Create React App](https://github.com/facebook/create-react-app). It is an extension of [jbook](https://github.com/Cantem/jbook) project.

## Project structure

1. CLI
2. local-api
3. local-client

## CLI

This is the CLI infrastructure to help manage local-api server.

`omjs serve`

Start local-api server.

`omjs serve <file-name>`

Start local-api server and load file.

`omjs serve --port <PORT>`

Start local-api server on a desired port.

## local-api

## local-client

## Available Scripts

This project is using lerna to manage packages. Before you run `npm run start` that starts all packages in parallel, you should `cd` to `/packages/local-client` and run `npm install`.

In the project directory, you can run:

### `npm start`

Runs the jbook app (local-client) and local-api in the development mode in parallel.
UI is available at [http://localhost:3000](http://localhost:3000).
