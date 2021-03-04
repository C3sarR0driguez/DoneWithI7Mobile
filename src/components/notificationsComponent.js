import React from "react";
import Flex from "components/flexComponent";
import useNotifications from "hooks/useNotifications";

import styles from "./notificationsStyles";

function Notifications() {
    const { notifications } = useNotifications();
    return (
        <Flex style={styles.root}>
            {notifications.map((notification) => {
                return (
                    <Flex
                        key={notification.uuid}
                        style={[
                            styles.notification,
                            { backgroundColor: notification.bgColor },
                        ]}
                    >
                        {notification.text}
                    </Flex>
                );
            })}
        </Flex>
    );
}

Notifications.displayName = Notifications.name;
Notifications.propTypes = {};
Notifications.defaultProps = {};
export default Notifications;
