import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { OfflineNotification } from "components";
import AppNavigator from "navigation/appNavigator";
import { useFonts } from "expo-font";
import navigationTheme from "ui/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "navigation/authNavigator";
import storage from "utils/storage";
import STORAGE_KEYS from "globals/storage";
import useAuth from "hooks/useAuth";

export default function App() {
    const auth = useAuth();
    const [ready, setReady] = useState(false);

    async function hydrate() {
        const result = await storage.retrieveSecure(STORAGE_KEYS.AUTH);
        if (result.ok && result.data) {
            auth.logIn(result.data);
        }

        setReady(true);
    }

    useEffect(() => {
        hydrate();
    }, []);

    const [loaded, error] = useFonts({
        "Jura Bold": require("assets/fonts/jura/Jura-Bold.ttf"),
        "Jura Light": require("assets/fonts/jura/Jura-Light.ttf"),
        "Jura Medium": require("assets/fonts/jura/Jura-Medium.ttf"),
        "Jura Regular": require("assets/fonts/jura/Jura-Regular.ttf"),
        "Jura SemiBold": require("assets/fonts/jura/Jura-SemiBold.ttf"),
    });
    if (!ready) {
        return <AppLoading />;
    }
    if (loaded) {
        return (
            <>
                <StatusBar />
                <OfflineNotification />
                <NavigationContainer theme={navigationTheme}>
                    {auth.user ? <AppNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            </>
        );
    }
    return null;
}
