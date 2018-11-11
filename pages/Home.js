import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
const { width, height } = Dimensions.get("window");

// Scrollview: Change asset to a bigger height
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/mainpage.png")}
          style={{
            width: width,
            height: height
          }}
        />

        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Camera");
          }}
        >
          <View style={styles.visibleClick} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// Teach how to use dinamic values in top and left.
const styles = StyleSheet.create({
  visibleClick: {
    position: "absolute",
    width: '40%',
    height: '7%',
    top: '40%',
    left: '7%'
  },
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
