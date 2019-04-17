// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Pages

import Public from "./Public";
import Private from "./Private";

import { Loading } from "../components";

import { authActions } from "../bus/auth/actions";

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get("isAuthenticated"),
    isInitialized:   state.auth.get("isInitialized"),
});

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
};

@hot(module)
@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class App extends Component {
    componentDidMount () {
        const { initializeAsync } = this.props;

        initializeAsync();
    }
    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private /> : <Public />;
    }
}
