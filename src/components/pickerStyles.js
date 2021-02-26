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
    placeholder: {
        color: COLORS.MEDIUM,
        flex: 1,
    },
    text: {
        flex: 1,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
