import { StyleSheet } from "react-native";
import COLORS from "ui/colors";
import { SPACE } from "ui/metrics";

const baseStyles = {
    root: {
        backgroundColor: COLORS.LIGHT
    },
    container: {
        marginVertical: SPACE * 2.5,
    },

};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
