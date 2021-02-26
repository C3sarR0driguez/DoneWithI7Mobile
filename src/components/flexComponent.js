import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import withMarginAndPadding from "hocs/withMarginAndPaddingComponent";

import styles from "./flexStyles";

const JUSTIFY_STYLES_MAP = {
        center: styles.justifyCenter,
        between: styles.justifyBetween,
        around: styles.justifyAround,
        start: styles.justifyStart,
        end: styles.justifyEnd,
    },
    ALIGN_STYLES_MAP = {
        center: styles.alignCenter,
        between: styles.alignBetween,
        around: styles.alignAround,
        start: styles.alignStart,
        end: styles.alignEnd,
    };

function mapStateAndPropsToStyles({
    marginAndPaddingStyle,
    style,
    stretch,
    flex,
    column,
    row,
    justify,
    align,
}) {
    const ownStyles = {
        rootStyle: [marginAndPaddingStyle],
    };
    if (flex) {
        ownStyles.rootStyle.push({ flex: +flex });
    }
    if (justify && JUSTIFY_STYLES_MAP[justify]) {
        ownStyles.rootStyle.push(JUSTIFY_STYLES_MAP[justify]);
    }
    if (align && ALIGN_STYLES_MAP[align]) {
        ownStyles.rootStyle.push(ALIGN_STYLES_MAP[align]);
    }
    if (column) {
        ownStyles.rootStyle.push(styles.column);
    }
    if (row) {
        ownStyles.rootStyle.push(styles.row);
    }
    if (stretch) {
        ownStyles.rootStyle.push(styles.stretch);
    }
    if (style) {
        ownStyles.rootStyle.push(style);
    }
    return ownStyles;
}

function Flex(props) {
    const { rootStyle } = useMemo(() => mapStateAndPropsToStyles(props), [
        props,
    ]);
    const UnderlayingComponent = props.underlyingComponent;
    return (
        <UnderlayingComponent {...props} style={rootStyle}>
            {props.children}
        </UnderlayingComponent>
    );
}
Flex.displayName = Flex.name;
Flex.propTypes = {
    justify: PropTypes.oneOf(Object.keys(JUSTIFY_STYLES_MAP)),
    align: PropTypes.oneOf(Object.keys(ALIGN_STYLES_MAP)),
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    row: PropTypes.bool,
    column: PropTypes.bool,
    stretch: PropTypes.bool,
};
Flex.defaultProps = {
    underlyingComponent: View,
};

export default withMarginAndPadding(memo(Flex));
