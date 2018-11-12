import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import HomePage from "./pages/Home";
import CameraPage from "./pages/Camera";
import CheckinPage from "./pages/Checkin";

// Custom transition?
export default createStackNavigator(
  {
    Home: {
      screen: HomePage
    },
    Camera: {
      screen: CameraPage
    },
    Checkin: {
      screen: CheckinPage
    }
  },
  {
    mode: "modal",
    navigationOptions: {
      header: null,
      gesturesEnabled: true, //toogle gesture and show.
    }
  }
);
