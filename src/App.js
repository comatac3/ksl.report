import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Header from "./styles/Header";
import HeaderKslplus from "./styles/HeaderKslplus";

function App() {
  return (
    <>
      <Switch>
        <Route exact key="login" path="/" component={Login} />
        <Route exact key="MainPage" path="/DashboardKsl" component={Header} />
        <Route
          exact
          key="MainPage"
          path="/DashboardKslplus"
          component={HeaderKslplus}
        />
      </Switch>
    </>
  );
}
export default App;
