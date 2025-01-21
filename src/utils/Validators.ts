import toast from "react-hot-toast";
import {RecommendationFormData} from "@/types";

export const isValidUrl = (url: string): boolean => {
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}

export const isValidUrlWithoutHttp = (url: string): boolean => {
    const urlRegex = /^[^ "]+$/;
    return urlRegex.test(url);
}

export const validateCreateRecommendationForm = (formData: RecommendationFormData) => {
    console.log(`validating form:`, formData);

    // Check for mandatory fields
    for (const key in formData) {
        if (key === "timePeriod") { // for mandatory radio buttons
            const radioGroup = document.getElementsByName(key) as NodeListOf<HTMLInputElement>;
            const isChecked = Array.from(radioGroup).some(radio => radio.checked);
            if (!isChecked) {
                toast.error(`${key} is mandatory.`);
                return false;
            }
        } else { // for other fields
            const inputElement = document.getElementById(key) as HTMLInputElement | HTMLTextAreaElement | null;
            if (inputElement && inputElement.required && !inputElement.value) {
                toast.error(`${key} is mandatory.`);
                return false;
            }
        }
    }

    // Validate URL
    const url = (formData.url ?? "").trim();
    if (url.length != 0 && !isValidUrlWithoutHttp(url)) {
        toast.error("Invalid URL.");
        return false;
    }

    return true;
}
