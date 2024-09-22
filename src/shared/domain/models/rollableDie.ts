export enum Die {
    d3 = 3,
    d4 = 4,
    d6 = 6,
    d8 = 8,
    d10 = 10,
    d12 = 12,
    d20 = 20,
    d100 = 100
}

export class RollableDie {
    numberOfDice: number;
    eyes: Die;
    constant?: number;
    private rolledTotalResult: number | undefined;
    private singleResults: number[];

    constructor(numberOfDice: number, eyes: Die, constant: number = 0) {
        this.numberOfDice = numberOfDice;
        this.eyes = eyes;
        this.constant = constant;
        this.singleResults = [];
    }

    get result() {
        if (this.rolledTotalResult) return this.rolledTotalResult;

        this.rolledTotalResult = this.results.reduce((prev, current) => prev + current) + (this.constant ?? 0);
        return this.rolledTotalResult;
    }

    get results() {
        if (this.singleResults) return this.singleResults;

        this.singleResults = this.rollDice();
        return this.singleResults;
    }

    private rollDie() {
        return Math.floor(Math.random() * (this.eyes - 1) + 1);
    }

    private rollDice() {
        const results: number[] = [];
        for (let i = 0; i < this.numberOfDice; i++) {
            results.push(this.rollDie());
        }
        return results;
    }
}



