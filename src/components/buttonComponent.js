import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "ui/colors";
import Text from "components/textComponent";

import styles from "./buttonStyles";

function mapStateAndPropsToStyles({ primary, secondary }) {
    const ownStyles = {
        root: [styles.root],
    };
    if (primary) {
        ownStyles.root.push(styles.primary);
    }
    if (secondary) {
        ownStyles.root.push(styles.secondary);
    }
    return ownStyles;
}

function Button(props) {
    const { title, style, onPress, ...rest } = props;
    const { root } = useMemo(() => mapStateAndPropsToStyles(props), [props]);
    return (
        <TouchableOpacity {...rest} style={[root, style]} onPress={onPress}>
            <Text color={COLORS.WHITE}>{title?.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}
Button.defaultProps = {
    primary: true
};


export default Button;
