import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/checkin.png")}
          style={{
            width: width,
            height: height
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
