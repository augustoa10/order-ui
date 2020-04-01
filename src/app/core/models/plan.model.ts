interface PlanAttributes {
    id?: number;
    name?: string;
    description?: string;
    yearlyPrice?: number;
}

export class Plan implements PlanAttributes {
    id?: number;
    name?: string;
    description?: string;
    yearlyPrice?: number;

    constructor({
        id,
        name,
        description,
        yearlyPrice,
    }: PlanAttributes = {}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.yearlyPrice = yearlyPrice;
    }

    attributes(): PlanAttributes {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            yearlyPrice: this.yearlyPrice,
        };
    }
}
