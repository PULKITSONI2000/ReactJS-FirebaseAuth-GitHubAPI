import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

//component
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import firebaseConfig from "./config/firebaseConfig";
// init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null); //it must have to be null not an emoty array otherwise things are not checking wether the user is Authenticated or not
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
          {/* here * means all the other routs that are not being mention. Make sure yo mention it at the end */}
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
