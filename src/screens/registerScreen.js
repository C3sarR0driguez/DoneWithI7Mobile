import React, { useState } from "react";
import * as Yup from "yup";
import {
    Form,
    FormField,
    SubmitButton,
    Screen,
    ErrorMessage,
    ActivityIndicator,
} from "components";
import authApi from "api/auth";
import styles from "./registerStyles";
import useAuth from "hooks/useAuth";
import useApi from "hooks/useApi";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const [error, setError] = useState("");
    const logIn = useApi(authApi.logIn);
    const register = useApi(authApi.register);
    const auth = useAuth();

    async function handleSubmit(userRegister) {
        setError("");
        let result = await register.request(userRegister);
        if (!result.ok) {
            setError(result.data?.error || "Unexpected error ocurred.");
            return;
        }

        result = await logIn.request(userRegister.email, userRegister.password);
        if(!result.ok) {
            setError(result.data?.error || "Unexpected error ocurred.");
        }
        auth.logIn(result.data);
    }

    return (
        <Screen style={styles.root}>
            <ActivityIndicator visible={register.loading || logIn.loading}  />
            <ErrorMessage error={error} visible={!!error}></ErrorMessage>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
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
                <SubmitButton title="Register" />
            </Form>
        </Screen>
    );
}

export default RegisterScreen;
