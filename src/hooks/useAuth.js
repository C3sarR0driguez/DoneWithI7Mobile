import jwtDecode from "jwt-decode";
import storage from "utils/storage";
import STORAGE_KEYS from "globals/storage";
import { useContext } from "react";
import { AuthContext } from "contexts/auth";


function useAuth() {
    const { user, setUser } = useContext(AuthContext);

    function logIn(authToken) {
        storage.storeSecure(STORAGE_KEYS.AUTH, authToken);
        const user = jwtDecode(authToken);
        setUser(user);

        return user;
    }

    function logOut() {
        storage.removeSecure(STORAGE_KEYS.AUTH);
        setUser(null);
    }

    return { user, logIn, logOut };
}

export default useAuth;
