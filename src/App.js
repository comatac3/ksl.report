import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Line } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import "chartjs-plugin-datalabels";
// import { Chart } from "chart.js";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import MainPageKslplus from "./components/MainPageKslplus";
import Header from "./styles/Header";
// Chart.register(ChartDataLabels);

function App() {
  return (
    <>
      <Switch>
        <Route exact key="login" path="/" component={Login} />
        <Route exact key="MainPage" path="/DashboardKsl" component={MainPage} />
        <Route
          exact
          key="MainPage"
          path="/DashboardKslplus"
          component={MainPageKslplus}
        />
      </Switch>
    </>
  );
}
export default App;
