import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Card, Screen, Flex, Text, ActivityIndicator } from "components";
import ROUTES from "globals/routes";
import listingsApi from "api/listings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "ui/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import useApi from "hooks/useApi";

import styles from "./listingsStyles";

function ListingsScreen({ navigation }) {
    const { data: listings, error, loading, request: loadListings } = useApi(
        listingsApi.getListings
    );

    function goTo(...args) {
        navigation.navigate(...args);
    }

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <Screen style={styles.root}>
            {error && (
                <Flex justify="center" align="center" flex="1">
                    <Text style={styles.errorMessage}>
                        Couldn't get the listings
                    </Text>
                    <TouchableOpacity
                        style={styles.retryButton}
                        onPress={loadListings}
                    >
                        <MaterialCommunityIcons
                            name="reload"
                            size={hp(3.5)}
                            color={COLORS.WHITE}
                        />
                    </TouchableOpacity>
                </Flex>
            )}
            <ActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0]?.url}
                        thumbnailUrl={item.images[0]?.thumbnailUrl}
                        onPress={goTo.bind(this, ROUTES.LISTING_DETAILS, {
                            listing: item,
                        })}
                    />
                )}
            />
        </Screen>
    );
}

export default ListingsScreen;
