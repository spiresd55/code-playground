//https://reacttraining.com/react-router/web/guides/quick-start
import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home"; //TODO: Create index.ts
import {AppStore} from "./store/AppStore"
import {Provider} from "react-redux";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

//TODO: Place in seperate file
const theme = createMuiTheme({
   palette: {
       type: 'light'
   },
    typography: {
       useNextVariants: true
    }
});

const appWide = {
  margin: '0 auto',
  width: '80%'
};

//Initialize the redux store
AppStore.getInstance().initialize();

//TODO: Place routing rules in another file
ReactDom.render(
    <Provider store={AppStore.getInstance().store}>
        <Router>
            <MuiThemeProvider theme={theme}>
                <div style={appWide}>
                    <Route path="/" exact component={Home}></Route>
                </div>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);