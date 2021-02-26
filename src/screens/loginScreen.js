import React from "react";
import { Image } from "react-native";
import * as Yup from "yup";
import { Flex, Form, FormField, SubmitButton, Screen } from "components";

import styles from "./loginStyles";

const logo = require("assets/images/logo.png");
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <Screen>
            <Flex flex="1" padding="1">
                <Image style={styles.logo} source={logo} />

                <Form
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Login" />
                </Form>
            </Flex>
        </Screen>
    );
}

export default LoginScreen;
