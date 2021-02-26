import React, { useMemo } from "react";
import { Text as RNText } from "react-native";

import styles from "./textStyles";

function mapSateAndPropsToStyles({
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    light,
    bold,
    semiBold,
    color
}) {
    const ownStyles = {
        root: [styles.root],
    };

    if (h1) {
        ownStyles.root.push(styles.h1);
    }
    if (h2) {
        ownStyles.root.push(styles.h2);
    }
    if (h3) {
        ownStyles.root.push(styles.h3);
    }
    if (h4) {
        ownStyles.root.push(styles.h4);
    }
    if (h5) {
        ownStyles.root.push(styles.h5);
    }
    if (h6) {
        ownStyles.root.push(styles.h6);
    }
    if (light) {
        ownStyles.root.push(styles.light);
    }
    if (bold) {
        ownStyles.root.push(styles.bold);
    }
    if (semiBold) {
        ownStyles.root.push(styles.semiBold);
    }
    if (color) {
        ownStyles.root.push({ color });
    }

    return ownStyles;
}

function Text(props) {
    const { children, style, ...rest } = props;
    const { root } = useMemo(() => mapSateAndPropsToStyles(props), [rest]);
    return (
        <RNText style={[root, style]} {...rest}>
            {children}
        </RNText>
    );
}

export default Text;
