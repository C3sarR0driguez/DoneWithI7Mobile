import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import Text from "components/textComponent";
import COLORS from "ui/colors";

import styles from "./cardStyles";

function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} h4 bold>
                        {title}
                    </Text>
                    <Text
                        color={COLORS.SECONDARY}
                        semiBold
                        numberOfLines={2}
                    >
                        {subTitle}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;
