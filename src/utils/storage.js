import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const PREFIX = "dwi7-storage-";
const memoizedSecureStore = {};

function _getKey(key) {
    return `${PREFIX}${key}`;
}

async function storeSecure(key, value, cleanCache = false) {
    const result = {
        ok: false,
    };

    if (cleanCache) {
        memoizedSecureStore[_getKey(key)] &&
            delete memoizedSecureStore[_getKey(key)];
    }

    try {
        await SecureStore.setItemAsync(_getKey(key), JSON.stringify(value));
        result.ok = true;
        return result;
    } catch (error) {
        return result;
    }
}

async function retrieveSecure(key) {
    const result = {
        ok: false,
        data: null,
    };
    if (memoizedSecureStore[_getKey(key)]) {
        result.ok = true;
        result.data = memoizedSecureStore[_getKey(key)];
        return result;
    }

    try {
        const serializedItem = await SecureStore.getItemAsync(_getKey(key));
        const deserializedItem = JSON.parse(serializedItem);
        result.ok = true;
        if (deserializedItem) {
            result.data = deserializedItem;
        }
        return result;
    } catch (e) {
        return result;
    }
}

async function removeSecure(key) {
    const result = {
        ok: false,
        data: null,
    };
    memoizedSecureStore[_getKey(key)] &&
        delete memoizedSecureStore[_getKey(key)];
    try {
        const serializedItem = await SecureStore.deleteItemAsync(_getKey(key));
        const deserializedItem = JSON.parse(serializedItem);
        result.ok = true;
        if (deserializedItem) {
            result.data = deserializedItem;
        }
        return result;
    } catch (e) {
        result.ok = false;
        return result;
    }
}

async function retrieve(key) {
    const result = {
        ok: false,
        data: null,
    };

    try {
        await AsyncStorage.getItem(`${PREFIX}${key}`);
        result.ok = true;
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

    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        result.ok = true;
    } catch (error) {
        return result;
    }
}

export default {
    store,
    storeSecure,
    removeSecure,
    retrieve,
    retrieveSecure,
};
