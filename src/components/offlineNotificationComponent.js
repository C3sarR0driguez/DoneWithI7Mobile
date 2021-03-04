import React, { useState } from "react";
import Flex from "components/flexComponent";
import Text from "components/textComponent";
import { useNetInfo } from "@react-native-community/netinfo";
import COLORS from "ui/colors";

import styles from "./offlineNotificationStyles";
import { useEffect } from "react";

function OfflineNotification() {
    const netInfo = useNetInfo();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (
            netInfo.type !== "unknown" &&
            netInfo.isInternetReachable === false
        ) {
            setVisible(true);
        } else if(netInfo.type !== "unknown" && netInfo.isInternetReachable) {
            setVisible(false);
        }
    }, [netInfo]);
    if (!visible) {
        return null;
    }
    return (
        <Flex style={styles.root}>
            <Text color={COLORS.WHITE}>No internet connection</Text>
        </Flex>
    );
}

OfflineNotification.displayName = OfflineNotification.name;
OfflineNotification.propTypes = {};
OfflineNotification.defaultProps = {};
export default OfflineNotification;
