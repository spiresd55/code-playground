//https://reacttraining.com/react-router/web/guides/quick-start
import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import Home from "./components/Home/Home"; //TODO: Create index.ts
import {Search} from "./components/Search/Search";
import {AppStore} from "./store/AppStore"
import {Provider} from "react-redux";

//Initialize the redux store
AppStore.getInstance().initialize();

const menuItems = ['Search'];

//TODO: Create RouterListItem
const drawer = (
    /*<List>
        {menuItems.map((text, index) => (
            <ListItem key={text}>
                <ListItemText primary={text}></ListItemText>
            </ListItem>
        ))}
    </List>*/
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </li>
        </ul>
    </nav>
);

//TODO: Modularize routing
ReactDom.render(
    <Provider store={AppStore.getInstance().store}>
        <Router>
            <div>
                Welcome to the app
                <Drawer open={false}>{drawer}</Drawer>
                <Route path="/" exact component={Home}></Route>
                <Route path="/search" component={Search}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);