import { StyleSheet } from "react-native";
import { SPACE } from "ui/metrics";

const baseStyles = {
    root: {
        flex: 1,
    },
    imagePickerInput: {
        marginRight: SPACE,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
