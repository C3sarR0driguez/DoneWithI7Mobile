import { StyleSheet } from "react-native";
import COLORS from "ui/colors";

const baseStyles = {
    root: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: COLORS.WHITE,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
