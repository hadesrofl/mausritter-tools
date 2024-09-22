"use client";
import { Add } from "@mui/icons-material";
import { Fab, useTheme } from "@mui/material";
import { useDialogs } from "@toolpad/core/useDialogs";
import { useState } from "react";
import CreateCreatureDialog from "../components/create-creature-dialog/create-creature-dialog";
import Statblock from "../components/statblock";
import { Creature } from "../models/creature";
import Grid from "@mui/material/Grid2";

export default function CreatureGallery() {
    const theme = useTheme();
    const [creatures, setCreatures] = useState<Creature[]>([]);
    const dialogs = useDialogs();

    const handleCreateClick = async () => {
        const newCreatures = [...creatures];
        const creature = await dialogs.open(CreateCreatureDialog);
        if (creature) {
            newCreatures.push(creature);
            setCreatures(newCreatures);
        }
    }

    const creatureGallery = () => {
        return creatures.map(creature => {
            return <Grid size="auto" key={creature.name}>
                <Statblock creature={creature} theme={theme} />
            </Grid>
        })
    };
    return <Grid container spacing={2}>
        <Grid size={12} textAlign="start" alignContent="center">
            <Fab color="primary" aria-label="add" onClick={handleCreateClick}><Add /></Fab>
        </Grid>
        <Grid size={12}>
            <Grid container spacing={2}>
                {creatureGallery()}
            </Grid>
        </Grid>

    </Grid>
}