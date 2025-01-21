import {parseDate} from "@internationalized/date";
import {CalendarDate} from "@heroui/react";
import {RecommendationFormData} from "@/types";

export const dateToString = (date: CalendarDate | null): string => {
    if (date === null) {
        return "";
    }

    // make month & day of 2 digits
    const month = date.month < 10 ? `0${date.month}` : date.month;
    const day = date.day < 10 ? `0${date.day}` : date.day;

    return `${date.year}-${month}-${day}T00:00:00Z`;
}

export const stringToDate = (date: string): CalendarDate => {
    // date = "2028-01-04T12:00:00Z";
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const formattedDate = `${year}-${month}-${day}`;
    return parseDate(formattedDate);
}

export const getFinalRecommendationData = (formData: RecommendationFormData) => {
    return {
        stockTicker: formData.stockTicker || null,
        advisorId: formData.advisorId || null,
        timePeriod: formData.timePeriod || null,
        rating: formData.rating || null,
        entryPrice: formData.entryPrice || null,
        targetPrice: formData.targetPrice || null,
        targetDate: dateToString(formData.targetDate) || null,
        stopLoss: formData.stopLoss || null,
        closurePrice: formData.closurePrice || null,
        closureReason: formData.closureReason || null,
        closedAt: dateToString(formData.closedDate) || null,
        closingRecommendationId: null,
        recommendationDate: dateToString(formData.recommendationDate) || null,
        rationale: formData.reason || null,
        recommendationUrl: formData.url || null,
        isActive: formData.isActive,
    }
}
