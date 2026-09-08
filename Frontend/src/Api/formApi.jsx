import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://ahaan-software-consulting-llp.onrender.com/api"

const API = axios.create({ baseURL: BASE_URL })

export const createBusinessCheck = async (data) => {
    try {
        const response = await API.post("/business-check", data);
        return response.data
    }
    catch (error) {
        console.error("error submetting bussiness check", error);
        throw error;
    }
}
export const spinBusinessCheck = async (email) => {
  try {
    const response = await API.post("/business-check/spin", { email });
    return response.data; // { prize: "Free Website Audit" }
  } catch (error) {
    // backend should respond 409 if this email already spun
    console.error("❌ Error spinning:", error);
    throw error;
  }
};
export default API;