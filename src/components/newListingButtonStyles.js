import { StyleSheet } from "react-native";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        backgroundColor: COLORS.PRIMARY,
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: COLORS.WHITE,
        borderWidth: 15,
        bottom: 40,
        alignItems: "center",
        justifyContent: "center",
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
