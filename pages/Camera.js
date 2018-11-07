import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions
} from "react-native";
import { Camera, Permissions, FaceDetector } from "expo";

import cameraOverlay from "../assets/cameraOverlay.png";
import cameraDetected from "../assets/cameraOverlay-detected.png";

const { width, height } = Dimensions.get("window");
export default class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    loaded: false,
    detected: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });

    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 1000);
  }

  handleChangeCamera = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };

  handleFacesDetected = () => {
    if (this.state.loaded) {
      this.setState({
        detected: true
      });

      setTimeout(() => {
        this.props.navigation.navigate("Checkin");
        this.setState({
          detected: false,
          loaded: false
        });
      }, 1000);
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.accurate,
              detectLandmarks: FaceDetector.Constants.Mode.none,
              runClassifications: FaceDetector.Constants.Mode.none
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <Image
                source={this.state.detected ? cameraDetected : cameraOverlay}
                style={{
                  position: "absolute",
                  width: width,
                  height: height
                }}
              />
              <TouchableWithoutFeedback onPress={this.handleChangeCamera}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    position: "absolute",
                    bottom: 40,
                    right: 40
                    //backgroundColor: "rgba(255,255,255,0.5)"
                  }}
                />
              </TouchableWithoutFeedback>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
