import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "components/textComponent";

import styles from "./pickerItemStyles";

function PickerItem(props) {
    const { item, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.root}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );
}

export default PickerItem;
