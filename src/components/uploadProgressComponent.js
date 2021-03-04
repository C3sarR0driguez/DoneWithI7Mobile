import React from "react";
import { Modal } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Flex from "components/flexComponent";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";
import COLORS from "ui/colors";

import styles from "./uploadProgressStyles";

const done = require("assets/animations/done.json");

function UploadProgress(props) {
    const { progress, visible, onUploadFinish } = props;

    return (
        <Modal style={styles.root} visible={visible}>
            <Flex align="center" justify="center" flex="1">
                {progress === 1 ? (
                    <LottieView
                        source={done}
                        loop={false}
                        autoPlay
                        style={styles.animation}
                        onAnimationFinish={onUploadFinish}
                    />
                ) : (
                    <ProgressBar
                        progress={progress}
                        width={wp(80)}
                        color={COLORS.PRIMARY}
                    />
                )}
            </Flex>
        </Modal>
    );
}

UploadProgress.displayName = UploadProgress.name;
UploadProgress.propTypes = {};
UploadProgress.defaultProps = {};
export default UploadProgress;
