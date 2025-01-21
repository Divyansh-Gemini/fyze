import {Stock} from "@/models/Stock";
import {Advisor} from "@/models/Advisor";

export class RecommendationResponse {
    createdAt: string;
    updatedAt: string;
    id: string;
    stockId: number;
    stock: Stock;
    advisorId: number;
    advisor: Advisor;
    timePeriod: string;
    rating: string;
    entryPrice: number;
    entryDate: string;
    targetPrice: number;
    targetDate: string;
    stopLoss: number;
    closurePrice: number;
    closureReason: string;
    closedAt: string;
    closingRecommendationId: string;
    closingRecommendation: string;
    relatedRecommendations: string;
    rationale: string;
    recommendationUrl: string;
    isActive: boolean;
    absoluteReturn: number;

    // constructor
    constructor(
        createdAt: string,
        updatedAt: string,
        id: string,
        stockId: number,
        stock: Stock,
        advisorId: number,
        advisor: Advisor,
        timePeriod: string,
        rating: string,
        entryPrice: number,
        entryDate: string,
        targetPrice: number,
        targetDate: string,
        stopLoss: number,
        closurePrice: number,
        closureReason: string,
        closedAt: string,
        closingRecommendationId: string,
        closingRecommendation: string,
        relatedRecommendations: string,
        rationale: string,
        recommendationUrl: string,
        isActive: boolean,
        absoluteReturn: number
    ) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
        this.stockId = stockId;
        this.stock = stock;
        this.advisorId = advisorId;
        this.advisor = advisor;
        this.timePeriod = timePeriod;
        this.rating = rating;
        this.entryPrice = entryPrice;
        this.entryDate = entryDate;
        this.targetPrice = targetPrice;
        this.targetDate = targetDate;
        this.stopLoss = stopLoss;
        this.closurePrice = closurePrice;
        this.closureReason = closureReason;
        this.closedAt = closedAt;
        this.closingRecommendationId = closingRecommendationId;
        this.closingRecommendation = closingRecommendation;
        this.relatedRecommendations = relatedRecommendations;
        this.rationale = rationale;
        this.recommendationUrl = recommendationUrl;
        this.isActive = isActive;
        this.absoluteReturn = absoluteReturn;
    }
}
