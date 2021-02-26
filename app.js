import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNavigator from "navigation/appNavigator";
import { useFonts } from "expo-font";
import navigationTheme from "ui/navigationTheme";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const [loaded, error] = useFonts({
        "Jura Bold": require("assets/fonts/jura/Jura-Bold.ttf"),
        "Jura Light": require("assets/fonts/jura/Jura-Light.ttf"),
        "Jura Medium": require("assets/fonts/jura/Jura-Medium.ttf"),
        "Jura Regular": require("assets/fonts/jura/Jura-Regular.ttf"),
        "Jura SemiBold": require("assets/fonts/jura/Jura-SemiBold.ttf"),
    });
    if (loaded) {
        return (
            <NavigationContainer theme={navigationTheme}>
                <AppNavigator />
            </NavigationContainer>
        );
    }
    return null;
}
