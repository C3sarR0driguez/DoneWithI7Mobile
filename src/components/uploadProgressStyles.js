import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.LIGHT
    },
    animation: {
        width: wp(40)
    }
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
