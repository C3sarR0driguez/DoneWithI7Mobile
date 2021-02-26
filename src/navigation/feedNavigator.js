import React from "react";
import Listings from "screens/listingsScreen";
import ListingDetails from "screens/listingDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "globals/routes";

const Stack = createStackNavigator();

function FeedNavigator() {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.LISTINGS} component={Listings} />
            <Stack.Screen
                name={ROUTES.LISTING_DETAILS}
                component={ListingDetails}
            />
        </Stack.Navigator>
    );
}

FeedNavigator.displayName = FeedNavigator.name;
FeedNavigator.propTypes = {};
FeedNavigator.defaultProps = {};
export default FeedNavigator;
