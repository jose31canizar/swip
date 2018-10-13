import { AppNavigator } from "../routes";
import { DrawerActions } from "react-navigation";

let initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Main")
);

function nav(state = initialState, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}

export default nav;
