import React from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "ui/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { baseStyles as textBaseStyles } from "components/textStyles";
import styles from "./textInputStyles";

function TextInput({ icon, width = "100%", ...rest }) {
    return (
        <View style={[styles.root, { width }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={hp(3)}
                    color={COLORS.MEDIUM}
                    style={styles.icon}
                />
            )}
            <RNTextInput
                placeholderTextColor={COLORS.MEDIUM}
                style={textBaseStyles.root}
                {...rest}
            />
        </View>
    );
}

export default TextInput;
