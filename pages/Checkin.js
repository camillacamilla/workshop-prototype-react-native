import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/checkin.png")}
          style={{
            width,
            height
          }}
        />
        <TouchableWithoutFeedback 
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}>
          <View
            style={styles.backLinkContainer}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backLinkContainer: {
    width: '30%',
    height: '7%',
    position: "absolute",
    bottom: '4%',
    right: '20%'
  }
});
