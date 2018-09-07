/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button } from "native-base";
import { Router, Scene, Actions } from "react-native-router-flux";
import Home from "./components/home";
import Post from "./components/Post";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene component={Home} hideNavBar key="home" />
          <Scene component={Post} hideNavBar key="post" path="/post/:id" />
        </Scene>
      </Router>
    );
  }
}
