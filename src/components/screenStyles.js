import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const baseStyles = {
    root: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
