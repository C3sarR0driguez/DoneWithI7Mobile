import { StyleSheet } from "react-native";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        backgroundColor: COLORS.LIGHT,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
