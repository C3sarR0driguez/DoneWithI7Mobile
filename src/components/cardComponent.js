import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Text from "components/textComponent";
import COLORS from "ui/colors";
import { Image } from "react-native-expo-image-cache";

import styles from "./cardStyles";

function Card({ title, subTitle, imageUrl, thumbnailUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.root}>
                <Image
                    style={styles.image}
                    preview={{ uri: thumbnailUrl }}
                    uri={imageUrl}
                    tint="light"
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} h4 bold>
                        {title}
                    </Text>
                    <Text color={COLORS.SECONDARY} semiBold numberOfLines={2}>
                        {subTitle}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;
