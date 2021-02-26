import { DefaultTheme } from "@react-navigation/native";
import COLORS from "ui/colors";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: COLORS.PRIMARY,
        background: COLORS.WHITE,
    },
};
