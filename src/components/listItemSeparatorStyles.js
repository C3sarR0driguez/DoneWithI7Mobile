import { StyleSheet } from "react-native";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        width: "100%",
        height: 1,
        backgroundColor: COLORS.LIGHT,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
