import {apiRequest} from './api';
import {BASE_URL} from "@/utils/Constants";
import {Advisor} from "@/models/Advisor";

export const getAdvisors = async (value: string): Promise<Advisor[]> => {
    console.log(`advisorService :: getAdvisors: ${value}`)

    try {
        const response = await apiRequest({
            url: `${BASE_URL}/advisors?search=${encodeURIComponent(value)}`,
            method: "GET"
        });
        return response.data.advisors as Advisor[];
    } catch (error) {
        console.error(`advisorService :: getAdvisors: Error fetching advisor data: ${error}`);
        throw new Error("Failed to fetch advisor data. Please try again.");
    }
};
