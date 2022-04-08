import axios from "axios";
import { useContext, useMemo } from "react";
import { AppContext } from "../Providers";

const API_URL = "http://localhost:4000";
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
})
const useApi = () => {

    const { auth } = useContext(AppContext);

    return useMemo(() => {
        const get = async(path, params: {}) => {
            const data = await axios
                .get(
                    API_URL + path, {
                        params,
                        headers: {
                            Authorization: "Bearer " + auth.token,
                        },
                    }
                )
                .then((resp) => {
                    return resp;
                })
                .catch((e) => {
                    console.error(e);
                    throw e;
                });
            return data;
        };

        const post = async(path, body = {}) => {
            const headers = auth.token ? {
                headers: {
                    Authorization: "Bearer " + auth.token,
                }
            } : {};
            const data = await axiosInstance
                .post(
                    path,
                    body, {
                        ...headers
                    }
                )
                .then((resp) => {
                    return resp.data;
                })
                .catch((e) => {
                    console.error(e);
                    throw e;
                });
            return data;
        };

        const put = async(path, body = {}) => {
            const data = await axios
                .put(
                    API_URL + path,
                    body, {
                        headers: {
                            Authorization: "Bearer " + auth.token,
                        },
                    }
                )
                .then((resp) => {
                    return resp;
                })
                .catch((e) => {
                    console.error(e);
                    throw e;
                });
            return data;
        };

        const del = async(path) => {
            const data = await axios
                .delete(
                    API_URL + path, {
                        headers: {
                            Authorization: "Bearer " + auth.token,
                        },
                    }
                )
                .then((resp) => {
                    return resp;
                })
                .catch((e) => {
                    console.error(e);
                    throw e;
                });
            return data;
        };

        const patch = async(path, body = {}) => {
            const data = await axios
                .patch(
                    API_URL + path,
                    body, {
                        headers: {
                            Authorization: "Bearer " + auth.token,
                        },
                    }
                )
                .then((resp) => {
                    return resp;
                })
                .catch((e) => {
                    console.error(e);
                    throw e;
                });
            return data;
        };

        return {get, post, put, del, patch };
    }, [auth]);
};

export default useApi;