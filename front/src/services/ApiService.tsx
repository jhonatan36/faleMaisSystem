import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`
    }
});

export const getCalculatedPlans = (origin: number, destination: number, minutes: number) => {
    
    api.get("/calculator", {
        params: {
            origin,
            destination,
            minutes
        }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error("Error fetching calculated plans:", error);
        throw error;
    });
}