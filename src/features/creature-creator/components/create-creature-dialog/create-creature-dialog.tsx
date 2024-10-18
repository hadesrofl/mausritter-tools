"use client";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogProps } from "@toolpad/core";
import { Creature } from '@features/creature-creator/models/creature';
import CreatureWizard from './create-creature-wizard';
import { useState } from 'react';
import { Button, DialogActions, Grid2 } from '@mui/material';
import Close from '@mui/icons-material/Close';

export default function CreateCreatureDialog({ payload, open, onClose }: DialogProps<Creature | undefined, Creature | undefined>) {
    const [creature, setCreature] = useState<Creature | undefined>(payload);

    const handleCreatureCreation = (newCreature: Creature) => {
        setCreature(newCreature);
    }
    const handleAbort = () => onClose(undefined);

    return (
        <Dialog fullWidth open={open}>
            <DialogTitle>
                <Grid2 container>
                    <Grid2 size={10}>Create Creature</Grid2>
                    <Grid2 size={2} textAlign="right"><Button endIcon={<Close />} onClick={handleAbort} /></Grid2>
                </Grid2>
            </DialogTitle>
            <DialogContent>
                <CreatureWizard onChange={handleCreatureCreation} creature={creature} />
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleAbort}>Abort</Button>
                <Button color="primary" onClick={() => onClose(creature)}>{payload ? 'Save' : 'Create'}</Button>
            </DialogActions>
        </Dialog>);
}