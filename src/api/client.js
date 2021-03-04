import { create } from "apisauce";
import cache from "utils/cache";

const apiClient = create({
    baseURL: "https://614d81975abf.ngrok.io/api",
});

function asForm(json) {
    const form = new FormData();
    Object.entries(json).reduce((form, [key, value]) => {
        if (Array.isArray(value)) {
            const array = value;
            array.forEach((arrayValue) => {
                form.append(key, arrayValue);
            });
        } else {
            form.append(key, value);
        }
    }, form);

    return form;
}

const get = apiClient.get;

apiClient.get = async function (...args) {
    const url = args[0];
    const response = await get(...args);

    if (response.ok) {
        await cache.store(url, response.data);
        return response;
    }

    const result = await cache.retrieve(url);
    if (!result.ok) {
        return response;
    }
    return result.data
        ? {
            ok: true,
            data: result.data,
        }
        : response;
};

apiClient.asForm = asForm;
export default apiClient;
