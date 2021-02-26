import { StyleSheet } from "react-native";
import COLORS from "ui/colors";
import { BORDER_RADIUS } from "ui/metrics";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const baseStyles = {
    root: {
        flex: 1,
    },
    photoPreview: {
        backgroundColor: COLORS.LIGHT,
        width: hp(10),
        height: hp(10),
        borderRadius: BORDER_RADIUS,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    cameraIcon: {
        fontSize: hp(5),
        color: COLORS.GRAY,
    },
    photo: {
        width: "100%",
        height: "100%",
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
