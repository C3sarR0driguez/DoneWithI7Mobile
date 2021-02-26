import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./listItemDeleteActionStyles";
import COLORS from "ui/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.root}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={hp(3.5)}
                    color={COLORS.WHITE}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}


export default ListItemDeleteAction;
