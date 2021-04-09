import React from "react";
import UsersMainScreen from "./Screens/UsersMainScreen";
import UserScreen from "./Screens/UserScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UsersMainScreen} />
        <Route exact path="/user/:id" component={UserScreen} />
      </Switch>
    </Router>
  );
}

export default App;
