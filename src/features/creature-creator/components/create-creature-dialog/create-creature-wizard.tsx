"use client";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Grid from "@mui/material/Grid2";
import { StyledRating } from "./styledRating";
import { Creature, ValueRange } from "@features/creature-creator/models/creature";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import DirectionsRunOutlined from "@mui/icons-material/DirectionsRunOutlined";
import Psychology from "@mui/icons-material/Psychology";
import PsychologyOutlined from "@mui/icons-material/PsychologyOutlined";
import Security from "@mui/icons-material/Security";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import { ChangeEvent, useEffect, useState } from "react";
import { hpRatings, strRatings, dexRatings, wisRatings, armorRatings } from "./ratingDescription";
import RatingContainer from "./ratingContainer";
import SportsMma from "@mui/icons-material/SportsMma";
import SportsMmaOutlined from "@mui/icons-material/SportsMmaOutlined";
import { TextField } from "@mui/material";
import { armorSteps, dexSteps, hpSteps, strSteps, wisSteps } from "@features/creature-creator/models/attributeSteps";

interface CreatureWizard {
    creature?: Creature;
    onChange: (creature: Creature) => void;
}

interface RatingSelection {
    value: number;
    hoverValue: number;
}

export default function CreatureWizard({ onChange, creature }: CreatureWizard) {
    const attributeDefaultValue = 3;
    const armorDefaultValue = 0;
    const opacity = 0.55;

    const [name, setName] = useState<string>('');
    const [attacks, setAttacks] = useState<string>('');
    const [specialMoves, setSpecialMoves] = useState<string>('');
    const [hpSelection, setHpSelection] = useState<RatingSelection>({ value: attributeDefaultValue, hoverValue: -1 });
    const [strSelection, setStrSelection] = useState<RatingSelection>({ value: attributeDefaultValue, hoverValue: -1 });
    const [dexSelection, setDexSelection] = useState<RatingSelection>({ value: attributeDefaultValue, hoverValue: -1 });
    const [wisSelection, setWisSelection] = useState<RatingSelection>({ value: attributeDefaultValue, hoverValue: -1 });
    const [armorSelection, setArmorSelection] = useState<RatingSelection>({ value: armorDefaultValue, hoverValue: -1 });

    const findValueRange = (valueRange: ValueRange[], creatureValue: number) => {
        return valueRange.findIndex(range => range.min <= creatureValue && creatureValue <= range.max) + 1;
    }

    useEffect(() => {
        if (creature) {
            setName(creature.name);
            setAttacks(creature.attacks);
            setSpecialMoves(creature.specialMoves);
            const hpSelectionIndex = findValueRange(hpSteps, creature.hitpoints);
            setHpSelection({ value: hpSelectionIndex, hoverValue: hpSelectionIndex });
            const strSelectionIndex = findValueRange(strSteps, creature.str);
            setStrSelection({ value: strSelectionIndex, hoverValue: strSelectionIndex });
            const dexSelectionIndex = findValueRange(dexSteps, creature.dex);
            setDexSelection({ value: dexSelectionIndex, hoverValue: dexSelectionIndex });
            const wisSelectionIndex = findValueRange(wisSteps, creature.wis);
            setWisSelection({ value: wisSelectionIndex, hoverValue: wisSelectionIndex });
            const armorSelectionIndex = findValueRange(armorSteps, creature.armor) - 1;
            setArmorSelection({ value: armorSelectionIndex, hoverValue: armorSelectionIndex });
        }
    }, []);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event?.target.value !== undefined) setName(event.target.value);
    }

    const handleAttacksChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event?.target.value !== undefined) setAttacks(event.target.value);
    }

    const handleSpecialMovesChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        if (event?.target.value !== undefined) setSpecialMoves(event.target.value);
    }

    useEffect(() => {
        onChange(Creature.fromValueRanges(name, attacks, specialMoves, hpRatings[hpSelection.value - 1], strRatings[strSelection.value - 1], dexRatings[dexSelection.value - 1], wisRatings[wisSelection.value - 1], armorRatings[armorSelection.value]))
    }, [onChange, armorSelection.value, dexSelection.value, hpSelection.value, name, strSelection.value, wisSelection.value, attacks, specialMoves]);

    return <Grid container spacing={3}>
        <Grid size={12}>
            <TextField id="creature-name" label="Name" variant="standard" defaultValue={name} onChange={handleNameChange} sx={{ width: '80%' }} />
        </Grid>
        <Grid size={12}>
            <TextField id="creature-attacks" label="Attacks" variant="standard" defaultValue={attacks} onChange={handleAttacksChange} multiline sx={{ width: '100%' }} />
        </Grid>
        <Grid size={12}>
            <TextField id="creature-special-moves" label="Special Moves" variant="standard" defaultValue={specialMoves} onChange={handleSpecialMovesChange} multiline sx={{ width: '100%' }} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <RatingContainer title="Endurance of the Creature" hoverText={hpRatings[hpSelection.hoverValue !== -1 ? hpSelection.hoverValue - 1 : hpSelection.value - 1].description}>
                <StyledRating
                    name="hitpoint-rating"
                    value={hpSelection.value}
                    max={5}
                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    icon={<Favorite fontSize="inherit" />}
                    onChange={(_, value) => {
                        setHpSelection({ value: value ?? attributeDefaultValue, hoverValue: value ?? attributeDefaultValue });
                    }
                    }
                    onChangeActive={(_, value) => setHpSelection({ ...hpSelection, hoverValue: value })}
                    emptyIcon={<FavoriteBorder style={{ opacity }} fontSize="inherit" />}
                />
            </RatingContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <RatingContainer title="Strength of the Creature" hoverText={strRatings[strSelection.hoverValue !== -1 ? strSelection.hoverValue - 1 : strSelection.value - 1].description}>
                <StyledRating
                    name="strength-rating"
                    defaultValue={attributeDefaultValue}
                    value={strSelection.value}
                    max={5}
                    getLabelText={(value: number) => `${value} Muscle${value !== 1 ? 's' : ''}`}
                    icon={<SportsMma fontSize="inherit" />}
                    onChange={(_, value) => {
                        setStrSelection({ value: value ?? attributeDefaultValue, hoverValue: value ?? attributeDefaultValue });
                    }}
                    emptyIcon={<SportsMmaOutlined style={{ opacity }} fontSize="inherit" />}
                    onChangeActive={(_, value) => setStrSelection({ ...strSelection, hoverValue: value })}
                />
            </RatingContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <RatingContainer title="Agility of the Creature" hoverText={dexRatings[dexSelection.hoverValue !== -1 ? dexSelection.hoverValue - 1 : dexSelection.value - 1].description}>
                <StyledRating
                    name="dexterity-rating"
                    defaultValue={attributeDefaultValue}
                    value={dexSelection.value}
                    max={5}
                    getLabelText={(value: number) => `${value} Runner${value !== 1 ? 's' : ''}`}
                    icon={<DirectionsRun fontSize="inherit" />}
                    onChange={(_, value) => {
                        setDexSelection({ value: value ?? attributeDefaultValue, hoverValue: value ?? attributeDefaultValue });
                    }}
                    emptyIcon={<DirectionsRunOutlined style={{ opacity }} fontSize="inherit" />}
                    onChangeActive={(_, value) => setDexSelection({ ...dexSelection, hoverValue: value })}
                />
            </RatingContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <RatingContainer title="Spirit of the Creature" hoverText={wisRatings[wisSelection.hoverValue !== -1 ? wisSelection.hoverValue - 1 : wisSelection.value - 1].description}>
                <StyledRating
                    name="wisdom-rating"
                    defaultValue={attributeDefaultValue}
                    value={wisSelection.value}
                    max={5}
                    getLabelText={(value: number) => `${value} Head${value !== 1 ? 's' : ''}`}
                    icon={<Psychology fontSize="inherit" />}
                    onChange={(_, value) => {
                        setWisSelection({ value: value ?? attributeDefaultValue, hoverValue: value ?? attributeDefaultValue });
                    }}
                    emptyIcon={<PsychologyOutlined style={{ opacity }} fontSize="inherit" />}
                    onChangeActive={(_, value) => setWisSelection({ ...wisSelection, hoverValue: value })}
                />
            </RatingContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <RatingContainer title="Armor of the creature" hoverText={armorRatings[armorSelection.hoverValue !== -1 ? armorSelection.hoverValue : armorSelection.value].description}>
                <StyledRating
                    name="armor-rating"
                    defaultValue={armorDefaultValue}
                    value={armorSelection.value}
                    max={3}
                    getLabelText={(value: number) => `${value} Shield${value !== 1 ? 's' : ''}`}
                    icon={<Security fontSize="inherit" />}
                    onChange={(_, value) => {
                        setArmorSelection({ value: value ?? armorDefaultValue, hoverValue: value ?? armorDefaultValue });
                    }}
                    emptyIcon={<SecurityOutlined style={{ opacity }} fontSize="inherit" />}
                    onChangeActive={(_, value) => setArmorSelection({ ...armorSelection, hoverValue: value })}
                />
            </RatingContainer>
        </Grid>
    </Grid>
}