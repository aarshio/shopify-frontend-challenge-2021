import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./components/Home";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <main>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
