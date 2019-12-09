import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.page";
import PrisonPage from "./pages/prisons/prisons.page";
import Login from "./pages/log-in/log-in.page";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/prisons" component={PrisonPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
