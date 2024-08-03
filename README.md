# Retrospection App

This is a React application for retrospection. It includes an error boundary and has multiple routes such as home, settings, and dashboard. All API services and WebSocket logic are segregated in a separate directory.

## Project Structure

```
retrospection-app
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── ErrorBoundary.js
│   │   ├── Home.js
│   │   ├── Settings.js
│   │   └── Dashboard.js
│   ├── services
│   │   ├── api.js
│   │   └── websocket.js
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── package.json
├── .gitignore
└── README.md
```

## File Descriptions

- `public/index.html`: HTML template for the React application.
- `public/manifest.json`: JSON file providing metadata about the web application.
- `src/components/ErrorBoundary.js`: Error boundary component that catches errors within its children.
- `src/components/Home.js`: React component representing the home page.
- `src/components/Settings.js`: React component representing the settings page.
- `src/components/Dashboard.js`: React component representing the dashboard page.
- `src/services/api.js`: Module containing functions for making API requests.
- `src/services/websocket.js`: Module containing functions for managing WebSocket connections.
- `src/App.js`: Root component of the application.
- `src/index.js`: Entry point of the application.
- `src/routes.js`: Module defining the routes of the application.
- `package.json`: Configuration file for npm.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Documentation for the project.

## Getting Started

To run the application, follow these steps:


1. Clone the repo and navigate to directory:
```
cd retrospection-app
```

2. Install dependencies:
```
npm install
```

3. Running the App:
To start the development server, run:
```
npm start
```

4. Open the application in your browser at `http://localhost:3000`


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
