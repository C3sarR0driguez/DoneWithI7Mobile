import React from "react";
import { SafeAreaView, View } from "react-native";

import styles from "./screenStyles";

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.root, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}

export default Screen;
