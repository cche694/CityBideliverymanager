import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Admin from "./admin.js";
import Login from "./page/login";
import ButtonUI from "./page/ui/button";
import ModalUI from "./page/ui/modal";
import SpinUI from "./page/ui/spin";
import MessageUI from "./page/ui/message";
import Notification from "./page/ui/notification";
import FormUI from "./page/ui/form";
import RegistUI from "./page/ui/regist";
import TabUI from "./page/ui/tab";
import TableUI from "./page/ui/table";
import Home from "./page/home/index.jsx";
import NoMatch from "./page/nomatch";

class IRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/ui/buttons" component={ButtonUI}></Route>
                  <Route path="/admin/ui/modals" component={ModalUI}></Route>
                  <Route path="/admin/ui/loadings" component={SpinUI}></Route>
                  <Route path="/admin/ui/tabs" component={TabUI}></Route>
                  <Route
                    path="/admin/ui/notification"
                    component={Notification}
                  ></Route>
                  <Route
                    path="/admin/ui/messages"
                    component={MessageUI}
                  ></Route>
                  <Route path="/admin/form/login" component={FormUI}></Route>
                  <Route path="/admin/form/reg" component={RegistUI}></Route>
                  <Route path="/admin/table/basic" component={TableUI}></Route>

                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            )}
          ></Route>
        </App>
      </Router>
    );
  }
}

export default IRouter;
