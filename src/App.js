import React from "react";
import "./App.css";
import Pokemons from "./components/Pokemons/Pokemons";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  app: {
    height: "100vh"
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <BrowserRouter>
      <Switch>
        <Redirect from="/" exact to="/1"/>
        <Route path="/:page" exact component={Pokemons}/>
        <Route path="/" exact component={Pokemons}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
