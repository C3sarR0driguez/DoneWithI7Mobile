import React from "react";
import { FlatList } from "react-native";
import { Card, Screen } from "components";
import ROUTES from "globals/routes";
import listings from "data/listings.json";

import styles from "./listingsStyles";

function ListingsScreen({ navigation }) {
    function goTo(...args) {
        console.log(...args);
        navigation.navigate(...args);
    }

    return (
        <Screen style={styles.root}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
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
