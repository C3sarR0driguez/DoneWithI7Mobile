import { StyleSheet } from "react-native";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        flex: 1,
        zIndex: 999,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: `${COLORS.BLACK}${30}`
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
