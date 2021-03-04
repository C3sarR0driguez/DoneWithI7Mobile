import { useState } from "react";
import uuid from "react-native-uuid";

function useNotifications() {
    const [notifications, setNotifications] = useState([]);

    function pushNotification(notification) {
        const notificationUuid = uuid.v4();
        notification.uuid = uuid;
        setNotifications((prevNotifications) => [
            ...prevNotifications,
            notification,
        ]);
        return notificationUuid;
    }

    function popNotification(uuid) {
        setNotifications((prevNotifications) =>
            prevNotifications.filter(
                (notification) => notification.uuid !== uuid
            )
        );
    }

    return {
        notifications,
        pushNotification,
        popNotification
    };
}

export default useNotifications;
