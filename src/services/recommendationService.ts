import {apiRequest} from './api';
import {BASE_URL} from "@/utils/Constants";
import {RecommendationResponse} from "@/models/RecommendationResponse";

export const createRecommendation = async (formData: object): Promise<RecommendationResponse> => {
    console.log(`recommendationService :: createRecommendation: ${JSON.stringify(formData)}`)

    try {
        const response = await apiRequest({
            url: `${BASE_URL}/recommendations`,
            method: "POST",
            body: formData
        });
        return response.data as RecommendationResponse;
    } catch (error) {
        console.error(`recommendationService :: createRecommendation: Failed to create recommendation: ${error}`);
        throw new Error("Failed to create recommendation. Please try again.");
    }
};
