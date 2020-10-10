import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { FullpageLoader } from "./CommonComponents";

// const Home = lazy(() => import("./Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullpageLoader />}>
        <Switch>
          {/* <Route exact path="/" render={{}} /> */}
          <p>React-Redux Boiler Plate</p>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(App);
