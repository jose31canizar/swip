import { Animated, Easing } from "react-native";
export const transitionConfig = (
  transitionProps,
  prevTransitionProps,
  isModal
) => ({
  containerStyle: {
    backgroundColor: "white"
  },
  transitionSpec: {
    duration: 450,
    easing: Easing.out(Easing.poly(3)),
    timing: Animated.timing,
    useNativeDriver: true
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;

    const curr = transitionProps.index;
    const currRoute = transitionProps && transitionProps.scene.route.routeName;
    const prevRoute =
      prevTransitionProps && prevTransitionProps.scene.route.routeName;
    const prev = prevTransitionProps && prevTransitionProps.index;

    const index = scene.index;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const f = 2;

    const translateDrawer = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [-width / f, 0]
    });

    const translateOpenScene = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [-width / f, 0]
    });

    const translateCloseScene = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [width / f, 0]
    });

    const translateCloseDrawer = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [0, -width / f]
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [2, 1.2]
    });

    //the scene we are translating (different from currRoute which is where we are going to)
    // console.log("scene.route.routeName");

    //translate drawer over 50% when opening
    if (currRoute === "drawer" && scene.route.routeName === "drawer") {
      return {
        transform: [{ translateX: translateDrawer }],
        width: "50%",
        backgroundColor: "white"
      };
    }

    //translate screen behind drawer over 50% when drawer opens and keep full width
    if (currRoute === "drawer" && scene.route.routeName !== "drawer") {
      return {
        transform: [{ translateX: translateOpenScene }],
        opacity
      };
    }

    //translate screen back to the left when drawer is closed, aka, we are going to a normal screen
    if (scene.route.routeName !== "drawer" && currRoute !== "drawer") {
      return {
        transform: [{ translateX: translateCloseScene }]
      };
    }

    if (scene.route.routeName === "drawer" && currRoute !== "drawer") {
      return {
        transform: [{ translateX: translateCloseScene }],
        width: "50%",
        backgroundColor: "white"
      };
    }
  }
});
