import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Start from "./views/start";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/start"} component={Start} />
        <Route path={"/"} component={Start} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
