import { StyleSheet } from "react-native";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        borderRadius: 15,
        backgroundColor: COLORS.WHITE,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
