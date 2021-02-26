import React from "react";
import { View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "components/iconComponent";
import Text from "components/textComponent";

import styles from "./categoryPickerItemStyles";

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.root}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={hp(6)}
                />
            </TouchableOpacity>
            <Text style={styles.label} semiBold>{item.label}</Text>
        </View>
    );
}


export default CategoryPickerItem;
