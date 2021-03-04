import React from "react";
import LottieView from "lottie-react-native";

const loader = require("assets/animations/loader.json");

function ActivityIndicator(props) {
    const { visible } = props;
    if (!visible) {
        return null;
    }
    return <LottieView autoPlay loop source={loader} />;
}

ActivityIndicator.displayName = ActivityIndicator.name;
ActivityIndicator.propTypes = {};
ActivityIndicator.defaultProps = {};
export default ActivityIndicator;
