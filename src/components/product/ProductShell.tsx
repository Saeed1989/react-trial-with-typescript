import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./style-sessions.css";
import { Catagories } from "./Catagories";
import ErrorBoundary from "./ErrorBoundary";
import { ProductDetailsShell } from "./product-details/ProductDetailsShell";
import { ProductListShell } from "./product-list/ProductListShell";

export const ProductShell: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}/:catId/:productId`}>
          <ProductDetailsShell />
        </Route>
        <Route path={`${path}/:catId`}>
          <ProductListShell />
        </Route>
        <Route path={`${path}`}>
          <Catagories />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
};
