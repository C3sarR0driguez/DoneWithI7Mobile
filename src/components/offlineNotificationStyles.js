import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Constants from "expo-constants";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        top: Constants.statusBarHeight,
        left: 0,
        right: 0,
        height: hp(10),
        backgroundColor: COLORS.DANGER,
        width: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
