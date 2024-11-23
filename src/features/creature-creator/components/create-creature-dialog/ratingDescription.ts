import {
  armorSteps,
  dexSteps,
  hpSteps,
  strSteps,
  wisSteps,
} from "@features/creature-creator/models/attributeSteps";
import { ValueRange } from "@features/creature-creator/models/creature";

interface RatingDescription extends ValueRange {
  description: string;
}

function buildRatingDescription(steps: ValueRange[], descriptions: string[]) {
  return steps.map<RatingDescription>((step, idx) => {
    return { ...step, description: descriptions[idx] };
  });
}

const hpDescriptions = [
  "ratings.hpDescriptions.notAFighter",
  "ratings.hpDescriptions.outOfBreath",
  "ratings.hpDescriptions.moderateFighter",
  "ratings.hpDescriptions.veteran",
  "ratings.hpDescriptions.likeABoss",
];
export const hpRatings: RatingDescription[] = buildRatingDescription(
  hpSteps,
  hpDescriptions,
);

const strDescriptions = [
  "ratings.strDescriptions.weak",
  "ratings.strDescriptions.skipsLegDay",
  "ratings.strDescriptions.fit",
  "ratings.strDescriptions.strong",
  "ratings.strDescriptions.pullsTrucks",
];
export const strRatings: RatingDescription[] = buildRatingDescription(
  strSteps,
  strDescriptions,
);

const dexDescriptions = [
  "ratings.dexDescriptions.canBarelyWalk",
  "ratings.dexDescriptions.clumsy",
  "ratings.dexDescriptions.moderate",
  "ratings.dexDescriptions.nimble",
  "ratings.dexDescriptions.ninja",
];
export const dexRatings: RatingDescription[] = buildRatingDescription(
  dexSteps,
  dexDescriptions,
);

const wisDescriptions = [
  "ratings.wilDescriptions.iAmGroot",
  "ratings.wilDescriptions.singleMinded",
  "ratings.wilDescriptions.ordinary",
  "ratings.wilDescriptions.strongWilled",
  "ratings.wilDescriptions.aBeautifulMind",
];
export const wisRatings: RatingDescription[] = buildRatingDescription(
  wisSteps,
  wisDescriptions,
);

const armorDescriptions = [
  "ratings.armorDescriptions.noArmor",
  "ratings.armorDescriptions.lightArmored",
  "ratings.armorDescriptions.wearsArmor",
  "ratings.armorDescriptions.tank",
];
export const armorRatings: RatingDescription[] = buildRatingDescription(
  armorSteps,
  armorDescriptions,
);
