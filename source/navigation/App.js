// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { Switch, Route, Riderect, withRouter } from "react-router-dom";

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from "../pages";

import { book } from "./book";

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.get("isAuthenticated"),
});

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Riderect to = { book.feed } />
            </Switch>
        ) : (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />

                <Riderect to = { book.login } />
            </Switch>
        );
    }
}
