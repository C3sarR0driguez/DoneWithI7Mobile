import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./activityIndicatorStyles";

const loader = require("assets/animations/loader.json");

function ActivityIndicator(props) {
    const { visible } = props;
    if (!visible) {
        return null;
    }
    return <View style={styles.root}><LottieView autoPlay loop source={loader} /></View>;
}

ActivityIndicator.displayName = ActivityIndicator.name;
ActivityIndicator.propTypes = {};
ActivityIndicator.defaultProps = {};
export default ActivityIndicator;
