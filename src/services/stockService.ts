import {apiRequest} from './api';
import {BASE_URL} from "@/utils/Constants";
import {Stock} from "@/models/Stock";

export const getStocks = async (value: string): Promise<Stock[]> => {
    console.log(`stockService :: getStocks: ${value}`)

    try {
        const response = await apiRequest({
            url: `${BASE_URL}/stocks?search=${encodeURIComponent(value)}`,
            method: "GET"
        });
        return response.data.stocks as Stock[];
    } catch (error) {
        console.error(`stockService :: getStocks: Error fetching stock data: ${error}`);
        throw new Error("Failed to fetch stock data. Please try again.");
    }
};
