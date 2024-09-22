import { hpSteps, strSteps, dexSteps, wisSteps, armorSteps } from "@features/creature-creator/models/attributeSteps";
import { ValueRange } from "@features/creature-creator/models/creature";

interface RatingDescription extends ValueRange {
    description: string;
}

function buildRatingDescription(steps: ValueRange[], descriptions: string[]) {
    return steps.map<RatingDescription>((step, idx) => {
        return { ...step, description: descriptions[idx] }
    });
}

const hpDescriptions = ['not a fighter', 'out of breath', 'moderate fighter', 'veteran', 'like a boss'];
export const hpRatings: RatingDescription[] = buildRatingDescription(hpSteps, hpDescriptions);

const strDescriptions = ['weak', 'skips leg day', 'fit', 'strong', 'pulls trucks'];
export const strRatings: RatingDescription[] = buildRatingDescription(strSteps, strDescriptions);


const dexDescriptions = ['can barely walk', 'clumsy', 'moderate', 'nimble', 'ninja'];
export const dexRatings: RatingDescription[] = buildRatingDescription(dexSteps, dexDescriptions);

const wisDescriptions = ['I am groot', 'single minded', 'ordinary', 'strong willed', 'a beautiful mind'];
export const wisRatings: RatingDescription[] = buildRatingDescription(wisSteps, wisDescriptions);

const armorDescriptions = ['no armor', 'light armored', 'wears armor', 'tank'];
export const armorRatings: RatingDescription[] = buildRatingDescription(armorSteps, armorDescriptions);