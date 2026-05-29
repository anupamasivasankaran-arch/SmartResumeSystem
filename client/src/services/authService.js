import axios from "axios";

const API = "http://127.0.0.1:5000/api/auth";

export const loginUser = async (data) => {
    try {

        const response = await axios.post(
            `${API}/login`,
            data
        );

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;

    }
};