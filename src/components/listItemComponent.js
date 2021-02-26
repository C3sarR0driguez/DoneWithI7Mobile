import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import COLORS from "ui/colors";
import Text from "components/textComponent";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import styles from "./listItemStyles";


function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={COLORS.LIGHT} onPress={onPress}>
                <View style={styles.root}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        {subTitle && (
                            <Text color={COLORS.MEDIUM} numberOfLines={2}>
                                {subTitle}
                            </Text>
                        )}
                    </View>
                    <MaterialCommunityIcons
                        color={COLORS.MEDIUM}
                        name="chevron-right"
                        size={hp(3)}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}


export default ListItem;
