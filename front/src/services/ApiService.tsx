import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export type ApiResponse = {
    origin: number,
    destination: number,
    plan: string,
    no_plan_price: number,
    with_plan_price: number
}

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`
    }
});

export const getCalculatedPlans = async (origin: number, destination: number, minutes: number): Promise<ApiResponse[]> => {
    
    const response = await api.get<ApiResponse[]>("/calculator", {
        params: {
            origin,
            destination,
            minutes
        }
    });

    return response.data;

}