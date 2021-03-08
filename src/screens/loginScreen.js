import React, { useState } from "react";
import { Image } from "react-native";
import * as Yup from "yup";
import {
    Flex,
    Form,
    FormField,
    SubmitButton,
    Screen,
    ActivityIndicator,
    ErrorMessage,
} from "components";
import authApi from "api/auth";
import useAuth from "hooks/useAuth";

import styles from "./loginStyles";
import useApi from "hooks/useApi";

const logo = require("assets/images/logo.png");
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const { loading, error } = useApi(authApi.logIn);
    const { login } = useAuth();

    async function handleSubmit({ email, password }) {
        const response = await authApi.logIn(email, password);
        login(response.data);
    }

    return (
        <Screen>
            <Flex flex="1" padding="1">
                <Image style={styles.logo} source={logo} />
                <ActivityIndicator visible={loading} />
                <ErrorMessage
                    visible={error}
                    error="Invalid email or password"
                />
                <Form
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleSubmit}
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
