import React, { useState, useEffect } from "react";
import "./styles.css";
import HomePage from "../HomePage";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "../firebase";

const theme = createMuiTheme();

export default function App() {
  const [firebaseInitialised, setfirebaseInitialised] = useState(false);   

  // update firebase initialisation status
  useEffect(() => {
    firebase.isInitialized().then(status => {
      setfirebaseInitialised(status);
    });
  });

  return firebaseInitialised !== false ? (    // firebase is initialised
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  ) : (
    // waiting for firebase initialisation to complete
    <div id="loader">
      <CircularProgress />
    </div>
  );
}
