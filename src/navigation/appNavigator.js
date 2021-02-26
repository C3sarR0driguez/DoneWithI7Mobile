import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "screens/listingEditScreen";
import AccountNavigator from "navigation/accountNavigator";
import ROUTES from "globals/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "navigation/feedNavigator";
import { NewListingButton } from "components";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={ROUTES.FEED_NAVIGATOR}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={ROUTES.LISTING_EDIT}
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={navigation.navigate.bind(
                                this,
                                ROUTES.LISTING_EDIT
                            )}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name={ROUTES.ACCOUNT_NAVIGATOR}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

AppNavigator.displayName = AppNavigator.name;
AppNavigator.propTypes = {};
AppNavigator.defaultProps = {};
export default AppNavigator;
