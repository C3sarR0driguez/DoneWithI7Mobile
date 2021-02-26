import React from "react";
import Account from "screens/accountScreen";
import Messages from "screens/messagesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "globals/routes";

const Stack = createStackNavigator();

function AccountNavigator() {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name={ROUTES.ACCOUNT} component={Account} />
            <Stack.Screen name={ROUTES.MESSAGES} component={Messages}/>
        </Stack.Navigator>
    );
}

AccountNavigator.displayName = AccountNavigator.name;
AccountNavigator.propTypes = {};
AccountNavigator.defaultProps = {};
export default AccountNavigator;
