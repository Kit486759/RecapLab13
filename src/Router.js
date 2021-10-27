import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact={true}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
