import axios from "axios";

const API =
    "https://smart-resume-system-hf7n.vercel.app/api/auth";

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

export const registerUser = async (data) => {
    try {
        const response = await axios.post(
            `${API}/register`,
            data
        );

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};