import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
require("./styles/global.scss");
require("./styles/global.scss");
require("./styles/global.scss");

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
// import { Router, Route, IndexRoute, IndexRedirect, Redirect, browserHistory, hashHistory } from 'react-router';

// import { Inbox } from "./components/Inbox";
// import { Dashboard } from "./components/Dashboard";
// import { About } from "./components/About";
// import { Message } from "./components/Message";
// import { Home } from "./components/Home";

/*ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
            <Redirect from="messages/:id" to="/messages/:id" />
        </Route>
        <Route component={Inbox}>
            <Route path="messages/:id" component={Message} />
        </Route>
    </Router>,
    document.getElementById("root")
);*/