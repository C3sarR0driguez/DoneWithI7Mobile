import { StyleSheet } from "react-native";
import { SPACE } from "ui/metrics";

const baseStyles = {
    root: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: SPACE * 2.5,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        paddingVertical: SPACE * 2.5,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
