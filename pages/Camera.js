import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
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
        <View style={styles.container}>
          <Camera
            style={styles.container}
            type={this.state.type}
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.accurate,
              detectLandmarks: FaceDetector.Constants.Mode.none,
              runClassifications: FaceDetector.Constants.Mode.none
            }}
          >
            <View
              style={styles.imageWrapper}
            >
              <Image
                source={this.state.detected ? cameraDetected : cameraOverlay}
                style={styles.faceOverlayMask}
              />
              <TouchableWithoutFeedback onPress={this.handleChangeCamera}>
                <View
                  style={styles.toggleCameraContainer}
                />
              </TouchableWithoutFeedback>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  faceOverlayMask: {
    position: "absolute",
    width,
    height
  },
  toggleCameraContainer: {
    width: '20%',
    height: '10%',
    position: 'absolute',
    bottom: '7%',
    right: '10%'
  }
});
