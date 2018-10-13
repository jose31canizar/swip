import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./mainStyle";
import { connect } from "react-redux";
import HamburgerIcon from "../../components/hamburger-icon/hamburger-icon";
import { DrawerActions, withNavigation } from "react-navigation";

const HeaderRightIcon = connect(
  null,
  dispatch => ({
    openDrawer: () => dispatch(DrawerActions.openDrawer()),
    closeDrawer: () => dispatch(DrawerActions.closeDrawer())
  })
)(props => (
  <HamburgerIcon
    openDrawer={props.openDrawer}
    closeDrawer={props.closeDrawer}
  />
));

export default class Main extends Component {
  state = {
    drawerState: "closed"
  };
  static navigationOptions = {
    headerTitle: "FLOWSTREAM",
    headerRight: <HeaderRightIcon />
  };
  openDrawer = () => {
    // this.props.navigation.closeDrawer();
    console.log(this.props.navigation);
    // this.props.dispatch(DrawerActions.openDrawer());
  };
  componentDidMount() {}
  render() {
    return (
      <View style={styles.main}>
        <Text>Main</Text>
      </View>
    );
  }
}
