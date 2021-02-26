import { StyleSheet } from "react-native";

const baseStyles = {
    root: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
