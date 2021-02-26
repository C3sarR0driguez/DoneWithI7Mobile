import React from "react";
import Text from "components/textComponent";

import styles from "./errorMessageStyles";

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return <Text style={styles.root} h6>{error}</Text>;
}

export default ErrorMessage;
