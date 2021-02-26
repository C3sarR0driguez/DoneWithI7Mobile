import { StyleSheet } from "react-native";
import COLORS from "ui/colors";
import { SPACE } from "ui/metrics";

const baseStyles = {
    root: {
        padding: SPACE * 2.5,
        backgroundColor: COLORS.LIGHT,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
