import client from "./client";
import ENDPOINTS from "globals/endpoints";


function logIn(email, password) {
    const reqBody = {
        email,
        password
    };
    return client.post(ENDPOINTS.AUTH, reqBody);
}

function register(userRegister) {
    const reqBody = {
        ...userRegister
    };

    return client.post(ENDPOINTS.USERS, reqBody);
}

export default { logIn, register };
