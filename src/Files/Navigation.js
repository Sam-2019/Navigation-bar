import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./navigation.css";

import Home from "./Components/Home";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import User from "./Components/User";
import Search from "./Components/Search";

import Navbar from "./Components/Navbar/Header";

const Okukus = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Constant />
      </Switch>
    </Router>
  );
};

const Constant = () => {
  return (
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/product/:id">
        <Product />
      </Route>

      <Route path="/user">
        <User />
      </Route>

      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
};

export default Okukus;
