import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const PREFIX = "dwi7-cache-";
const EXPIRY_IN_MINUTES = 5;

function expired({ updatedAt }) {
    const now = moment(Date.now());
    const storedTime = moment(updatedAt);
    return now.diff(storedTime, "minutes") > EXPIRY_IN_MINUTES;
}

async function retrieve(key) {
    const result = {
        ok: false,
        data: null,
    };

    try {
        const serializedItem = await AsyncStorage.getItem(`${PREFIX}${key}`);
        const deserializedItem = JSON.parse(serializedItem);
        result.ok = true;
        if (deserializedItem) {
            if (expired(deserializedItem)) {
                await AsyncStorage.removeItem(`${PREFIX}${key}`);
            } else {
                result.data = deserializedItem.value;
            }
        }
        return result;
    } catch (e) {
        result.ok = false;
        return result;
    }
}

async function store(key, value) {
    const result = {
        ok: false,
    };
    const item = {
        value,
        updatedAt: Date.now(),
    };
    try {
        await AsyncStorage.setItem(`${PREFIX}${key}`, JSON.stringify(item));
        result.ok = true;
        return result;
    } catch (e) {
        return result;
    }
}

export default {
    store,
    retrieve,
};
