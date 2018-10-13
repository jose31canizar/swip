import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import { connect } from "react-redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import Main from "./containers/main/main";
import Drawer from "./containers/drawer";
import Conversation from "./containers/conversation";

const appNavigatorConfigAuth = {};

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  "main",
  state => state.nav
);

export const StackNavigator = createStackNavigator(
  {
    Main: { screen: Main }
  },
  appNavigatorConfigAuth
);

export const AppNavigator = createDrawerNavigator(
  {
    Main: Drawer,
    Conversation
  },
  {
    drawerWidth: Dimensions.get("window").width,
    drawerPosition: "right",
    contentComponent: props => <StackNavigator />
  }
);

let ReduxifyAppNavigator = reduxifyNavigator(AppNavigator, "main");

class AppWithNavigationState extends Component {
  componentDidMount() {}
  render() {
    const { dispatch, nav } = this.props;

    return <ReduxifyAppNavigator dispatch={dispatch} state={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppWithNavigationState);
