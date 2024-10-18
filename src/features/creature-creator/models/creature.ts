import { v4 as uuidv4 } from 'uuid';
import { RollableDie } from "@shared/domain/models/rollableDie";

export interface ValueRange {
    min: number;
    max: number;
}

export class Creature {
    id: string;
    name: string;
    attacks: string;
    specialMoves: string;
    hitpoints: number;
    str: number;
    dex: number;
    wis: number;
    armor: number;

    private constructor(name: string, attacks: string, specialMoves: string, hitpoints: number, str: number, dex: number, wis: number, armor: number) {
        this.id = uuidv4();
        this.name = name;
        this.attacks = attacks;
        this.specialMoves = specialMoves;
        this.hitpoints = hitpoints;
        this.str = str;
        this.dex = dex;
        this.wis = wis;
        this.armor = armor;
    }

    static fromDie(name: string, attacks: string, specialMoves: string, hitdie: RollableDie, strDie: RollableDie, dexDie: RollableDie, wisDie: RollableDie, armorDie: RollableDie) {
        const hitpoints = hitdie.result;
        const str = strDie.result;
        const dex = dexDie.result;
        const wis = wisDie.result;
        const armor = armorDie.result;
        return new Creature(name, attacks, specialMoves, hitpoints, str, dex, wis, armor);
    }

    static fromValueRanges(name: string, attacks: string, specialMoves: string, hitpointsRange: ValueRange, strRange: ValueRange, dexRange: ValueRange, wisRange: ValueRange, armorRange: ValueRange) {
        const hitpoints = this.rollValue(hitpointsRange);
        const str = this.rollValue(strRange);
        const dex = this.rollValue(dexRange);
        const wis = this.rollValue(wisRange);
        const armor = this.rollValue(armorRange);
        return new Creature(name, attacks, specialMoves, hitpoints, str, dex, wis, armor);
    }

    private static rollValue(range: ValueRange) {
        return Math.floor(Math.random() * (range.max - range.min) + range.min);
    }
}