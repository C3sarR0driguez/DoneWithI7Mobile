import { watchPositionAsync } from "expo-location";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        backgroundColor: COLORS.DANGER,
        width: wp(25),
        justifyContent: "center",
        alignItems: "center",
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
