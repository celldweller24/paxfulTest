import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import store from "./store/store";
import IndexContainer from "./containers/IndexContainer";

const Index = () =>
    <Provider store={ store }>
        <IndexContainer />
    </Provider>;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}