import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Admin from "./admin.js";
import Login from "./page/login";
import ButtonUI from "./page/ui/buttons";
import Home from "./page/home/index.jsx";
import NoMatch from "./page/nomatch";
class IRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
          <Route eaxct path="/admin/form/login" component={Login}></Route>
          <Route
            eaxct
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/ui/buttons" component={ButtonUI}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            )}
          ></Route>
          </Switch>
        </App>
      </Router>
    );
  }
}

export default IRouter;
