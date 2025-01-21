export class Stock {
    createdAt: string;
    updatedAt: string;
    id: number;
    exchange: string;
    symbol: string;
    isin: string;
    shortName: string;
    fullName: string;
    marketCap: string;
    sector: string;
    screeners: string | null;
    ticker: string;

    constructor(
        createdAt: string,
        updatedAt: string,
        id: number,
        exchange: string,
        symbol: string,
        isin: string,
        shortName: string,
        fullName: string,
        marketCap: string,
        sector: string,
        screeners: string | null,
        ticker: string
    ) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
        this.exchange = exchange;
        this.symbol = symbol;
        this.isin = isin;
        this.shortName = shortName;
        this.fullName = fullName;
        this.marketCap = marketCap;
        this.sector = sector;
        this.screeners = screeners;
        this.ticker = ticker;
    }

    getStockId(): number {
        return this.id;
    }

    getStockName(): string {
        return this.shortName;
    }

    getTicker(): string {
        return this.ticker;
    }
}
