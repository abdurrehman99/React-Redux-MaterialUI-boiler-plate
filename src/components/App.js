import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { FullpageLoader } from "./CommonComponents";
import Layout from "../components/Layout";

// const Home = lazy(() => import("./Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullpageLoader />}>
        <Switch>
          <Layout>
            <p>React-Redux Boiler Plate</p>
          </Layout>
          {/* <Route exact path="/" render={{}} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(App);
