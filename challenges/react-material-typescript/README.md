# Typescript React Challenge 
&nbsp;
#### Introduction
- **Tech Stack Used:** React, Redux, Material-UI, Express, Redux-Thunk, Webpack

#### Starting the App
- **Install Node:** Install the latest version of node
- **Clone this project:** ```git clone {clone url}```
- **Install Dependencies:** ```npm install```
- **Install global deps:** ```npm install typescript -g && npm install webpack-cli -g ```
- **Run the project:** ```npm run start```

### Accessing the App
- **localhost:3000 :** Rest server that serves data source data
- **localhost:3000/datasource:** Retrieve the datasources (Application/JSON)
- **localhost:8081:** The webapp

### Notes
- Server code lives inside ./server
- The entry point to the app is app.tsx
- The redux store is configured in ./store (Contains actions and reducers for the app)
- The home container component lives inside ./components
- The Home component(High Order Component) is the only component that interacts with the redux store. 
- The SourceList and SourceCard components are Presentation components that do not maintain state. They recieve props from the Home component.
- Source is a simple interface that represnets the shape of the data being fetched from the server.
- SearchForm is a stateful component, that provides a callback to the Home Component. The Home Component will then dispatch an action to the redux store.
- ./store/actions/DatasourceActions contains the fetch code that uses redux-thunk and promises to retrieve the data.
- ./store/actions/Action.ts is an enum that the Datasource reducer and actions file uses.