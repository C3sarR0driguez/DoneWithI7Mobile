import React from "react";
import { ImageBackground, View, Image } from "react-native";
import Button from "components/buttonComponent";
import Text from "components/textComponent";
import ROUTES from "globals/routes";

import styles from "./welcomeStyles";

const background = require("assets/images/welcome.jpeg");
const logo = require("assets/images/logo.png");

function WelcomeScreen(props) {
    const { navigation } = props;
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.root}
            source={background}
            resizeMode="cover"
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.tagline} h3 semiBold>
                    Sell What You Don't Need
                </Text>
                <Text h5 semiBold align="center">
                    Time to say good bye to the old stuff
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Login" primary onPress={() => navigation.navigate(ROUTES.LOGIN)} />
                <Button title="Register" secondary onPress={() => navigation.navigate(ROUTES.REGISTER)} />
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;
