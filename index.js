import { registerRootComponent } from "expo";
import React from "react";
import App from "./app";
import AuthProvider from "contexts/auth";

registerRootComponent(() =>
    <AuthProvider>
        <App />
    </AuthProvider>
);
