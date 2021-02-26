import { StyleSheet } from "react-native";

const baseStyles = {
    column: {
        flexDirection: "column",
    },
    row: {
        flexDirection: "row",
    },
    justifyCenter: {
        justifyContent: "center",
    },
    justifyBetween: {
        justifyContent: "space-between",
    },
    justifyAround: {
        justifyContent: "space-around",
    },
    justifyStart: {
        justifyContent: "flex-start",
    },
    justifyEnd: {
        justifyContent: "flex-end",
    },
    alignCenter: {
        alignItems: "center",
    },
    alignStart: {
        alignItems: "flex-start",
    },
    alignEnd: {
        alignItems: "flex-end",
    },
    alignSelfStretch: {
        alignSelf: "stretch",
    },
    stretch: {
        width: "100%",
    },
};

const styles = StyleSheet.create(baseStyles);

export { baseStyles };
export default styles;
