import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "#000",
          paddingTop: 0
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/mainpage.png")}
          style={{
            width: width,
            height: 1357
          }}
        />

        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Camera");
          }}
        >
          <View style={styles.visibleClick} />
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

// Teach how to use dinamic values in top and left.
const styles = StyleSheet.create({
  visibleClick: {
    position: "absolute",
    width: "40%",
    height: "7%",
    top: "40%",
    left: "7%"
  },
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
