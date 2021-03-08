import React from "react";
import Welcome from "screens/welcomeScreen";
import Login from "screens/loginScreen";
import Register from "screens/registerScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "globals/routes";

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.WELCOME} component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
        </Stack.Navigator>
    );
}

AuthNavigator.displayName = AuthNavigator.name;
AuthNavigator.propTypes = {};
AuthNavigator.defaultProps = {};
export default AuthNavigator;
