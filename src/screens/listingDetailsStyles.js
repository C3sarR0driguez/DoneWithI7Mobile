import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SPACE } from "ui/metrics";

const baseStyles = {
    root: {
        padding: SPACE * 2.5,
    },
    image: {
        width: "100%",
        height: hp(40),
    },
    userContainer: {
        marginVertical: SPACE * 4.5,
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
