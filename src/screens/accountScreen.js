import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, ListItemSeparator, Icon, Screen } from "components";
import COLORS from "ui/colors";
import ROUTES from "globals/routes";

import styles from "./accountStyles";

const avatar = require("assets/images/mosh.jpg");
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: COLORS.PRIMARY,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: COLORS.SECONDARY,
        },
        targetScreen: ROUTES.MESSAGES,
    },
];

function Account({ navigation }) {
    return (
        <Screen style={styles.root}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
                    image={avatar}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}

export default Account;
