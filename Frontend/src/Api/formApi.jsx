import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://ahaan-software-consulting-llp.onrender.com"

const API = axios.create({ baseURL: BASE_URL })

export const createBusinessCheck = async (data) => {
    try {
        const response = await API.post("/bussiness-check", data);
        return response.data
    }
    catch (error) {
        console.error("error submetting bussiness check", error);
        throw error;
    }
}
export const spinBusinessCheck = async (data) => {
    try {
        const response = await API.post("/bussiness-check/spin", { email })
        return response.data;
    }
    catch (error) {
        console.error("❌ Error spinning:", error);
        throw error;
    }
}
export default API;