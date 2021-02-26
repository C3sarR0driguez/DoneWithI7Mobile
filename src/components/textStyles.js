import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const baseStyles = {
    root: {
        fontFamily: "Jura Regular",
        fontSize: hp(2.2),
    },
    h1: {
        fontSize: hp(4),
    },
    h2: {
        fontSize: hp(3.6),
    },
    h3: {
        fontSize: hp(3.2),
    },
    h4: {
        fontSize: hp(2.8),
    },
    h5: {
        fontSize: hp(1.8),
    },
    h6: {
        fontSize: hp(1.6),
    },
    light: {
        fontFamily: "Jura Light",
    },
    bold: {
        fontFamily: "Jura Bold",
    },
    semiBold: {
        fontFamily: "Jura SemiBold",
    },
};

const styles = StyleSheet.create(baseStyles);
export { baseStyles };
export default styles;
