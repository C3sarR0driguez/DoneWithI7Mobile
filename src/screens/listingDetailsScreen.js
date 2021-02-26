import React from "react";
import { View, Image } from "react-native";
import { Text, ListItem } from "components";

import styles from "./listingDetailsStyles";
import COLORS from "ui/colors";

const avatar = require("assets/images/mosh.jpg");

function ListingDetailsScreen({ route }) {
    const { listing } = route.params;

    return (
        <View>
            <Image style={styles.image} source={{ uri: listing.image }}  resizeMode="cover" />
            <View style={styles.root}>
                <Text h3>{listing.title}</Text>
                <Text color={COLORS.SECONDARY} h4>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={avatar}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;
