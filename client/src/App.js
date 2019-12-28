import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Homepage from "./pages/homepage/homepage.page";
import PrisonPage from "./pages/prisons/prisons.page";
import Login from "./pages/login/login.page";
import SignUp from "./pages/signup/signup.page";
import SingleSelectedPrisonPage from "./pages/single-selected-prison/single-selected-prison.page";
import SingleSelectedInmateProfile from "./pages/single-selected-inmate-profile/single-selected-inmate-profile.page";
import Admin from "./pages/admin/admin.page";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/prisons" component={PrisonPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route
            exact
            path="/prisons/:prisonId"
            component={SingleSelectedPrisonPage}
          />
          <Route
            path="/prisons/:prisonId/inmates/:inmateId"
            component={SingleSelectedInmateProfile}
          />
          <Route exact path="/admin/:prisonId" component={Admin} />
          <Route
            path="/admin/:prisonId/updateInmate/:inmateId"
            component={Admin}
          />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
