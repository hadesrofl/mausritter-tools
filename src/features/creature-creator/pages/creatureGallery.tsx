"use client";
import { Add, Print, Save } from "@mui/icons-material";
import { Button, Fab, IconButton, Stack, useTheme } from "@mui/material";
import { useDialogs } from "@toolpad/core/useDialogs";
import { useEffect, useState } from "react";
import CreateCreatureDialog from "../components/create-creature-dialog/create-creature-dialog";
import Statblock from "../components/statblock";
import { Creature } from "../models/creature";
import Grid from "@mui/material/Grid2";

import "./creatureGallery.css";
import { useLocalStorageState } from "@toolpad/core";

export default function CreatureGallery() {
    const theme = useTheme();
    const [creatureLocalStorage, setCreatureLocalStorage] = useLocalStorageState("mausritter-creatures", '');
    const [creatures, setCreatures] = useState<Creature[]>(creatureLocalStorage ? JSON.parse(creatureLocalStorage) : []);
    const dialogs = useDialogs();

    useEffect(() => {
        if (creatureLocalStorage) setCreatures(JSON.parse(creatureLocalStorage));
    }, [creatureLocalStorage]);

    const handleCreateClick = async () => {
        const newCreatures = [...creatures];
        const creature = await dialogs.open(CreateCreatureDialog);
        if (creature) {
            newCreatures.push(creature);
            setCreatures(newCreatures);
        }
    }

    const handleUpdateClick = async (creature: Creature) => {
        const newCreatures = [...creatures];
        const newCreature = await dialogs.open(CreateCreatureDialog, creature);
        if (newCreature) {
            const indexOfCreature = newCreatures.findIndex(c => c.id === creature.id);
            newCreatures[indexOfCreature] = newCreature;
            setCreatures(newCreatures);
        }
    }

    const handlePrint = () => {
        window.print();
    }

    const handleSave = () => {
        setCreatureLocalStorage(JSON.stringify(creatures));
    }

    const handleCreatureDelete = (creature: Creature) => {
        const newCreatures = creatures.filter(c => c.id !== creature.id);
        setCreatures(newCreatures);
    }

    const creatureGallery = () => {
        return creatures.map(creature => {
            return <Grid size={6} key={creature.name}>
                <Statblock creature={creature} theme={theme} onUpdate={handleUpdateClick} onDelete={handleCreatureDelete} />
            </Grid>
        })
    };
    return <Stack spacing={2}>
        <Grid container spacing={2}>
            <Grid size={6} textAlign="start" alignContent="center">
                <Fab color="primary" aria-label="add" onClick={handleCreateClick}><Add /></Fab>
            </Grid>
            <Grid size={5} textAlign="end" alignContent="center">
                <Button variant="outlined" color="success" aria-label="save" onClick={handleSave} startIcon={<Save />}>Save in Browser</Button>
            </Grid>
            <Grid size={1} alignContent="center">
                <IconButton color="secondary" aria-label="print" onClick={handlePrint}><Print /></IconButton>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            {creatureGallery()}
        </Grid>
    </Stack>
}