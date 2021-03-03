import { StyleSheet } from "react-native";
import COLORS from "ui/colors";
import { SPACE } from "ui/metrics";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const baseStyles = {
    root: {
        padding: SPACE * 2.5,
        backgroundColor: COLORS.LIGHT,
    },
    retryButton: {
        justifyContent: "center",
        alignItems: "center",
        width: hp(7),
        height: hp(7),
        borderRadius: hp(3.5),
        backgroundColor: COLORS.PRIMARY,
    },
    errorMessage: {
        marginBottom: SPACE * 4,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
