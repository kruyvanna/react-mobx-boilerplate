import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainRouter from "./main-router";
import Home from "../home/home";
import { Card } from "antd";
import { useStore } from "../../hooks/use-store";
import Header from "../../components/header/header";
import { ProductList } from "../product/product-list";

const LoggedIn = () => {
  const rootStore = useStore();
  const {
    uiStore,
    uiStore: { authStore },
  } = rootStore;

  return (
    <Card className="site-content">
      <Router>
        {authStore.isLoggedIn && <Header />}
        <Switch>
          <Route exact path="/">
            <MainRouter />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <ProductList />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </Card>
  );
};

export default LoggedIn;
