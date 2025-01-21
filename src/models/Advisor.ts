export class Advisor {
    createdAt: string;
    updatedAt: string;
    id: number;
    name: string;
    type: string;
    isSebiRegistered: boolean;
    isNismCertified: boolean;
    socialHandles: SocialHandle[];
    emails: string[];
    phones: string[];
    isActive: boolean;

    constructor(
        createdAt: string,
        updatedAt: string,
        id: number,
        name: string,
        type: string,
        isSebiRegistered: boolean,
        isNismCertified: boolean,
        socialHandles: SocialHandle[],
        emails: string[],
        phones: string[],
        isActive: boolean
    ) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
        this.name = name;
        this.type = type;
        this.isSebiRegistered = isSebiRegistered;
        this.isNismCertified = isNismCertified;
        this.socialHandles = socialHandles;
        this.emails = emails;
        this.phones = phones;
        this.isActive = isActive;
    }

    getAdvisorId(): number {
        return this.id;
    }
}

export class SocialHandle {
    platform: string;
    followers: number;
    handle: string;

    constructor(platform: string, followers: number, handle: string) {
        this.platform = platform;
        this.followers = followers;
        this.handle = handle;
    }
}
