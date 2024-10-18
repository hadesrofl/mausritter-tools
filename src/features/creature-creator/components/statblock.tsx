import { Card, CardHeader, CardContent, Typography, Theme, CardActions, IconButton, Stack } from "@mui/material";
import { Creature } from "../models/creature";
import { Delete, Edit } from "@mui/icons-material";

export default function Statblock({ creature, theme, onUpdate, onDelete }: { creature: Creature, theme: Theme, onUpdate: (creature: Creature) => void, onDelete: (creature: Creature) => void }) {

    const handleUpdate = () => {
        onUpdate(creature);
    }

    const handleDelete = () => {
        onDelete(creature);
    }

    return <Card>
        <CardHeader title={creature.name} />
        <CardContent>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`${creature.hitpoints} hp`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`, ${creature.str} STR`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`, ${creature.dex} DEX`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`, ${creature.wis} WIS`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{creature.armor > 0 ? `, armor ${creature.armor}` : ''}</Typography>

            {creature.attacks.split("\n").map((attack, idx) => {
                return <Typography key={attack} component="p" fontWeight={theme.typography.fontWeightBold}>{idx === 0 && attack !== '' ? `Attacks: ${attack}` : attack}</Typography>
            })}

            {creature.specialMoves.split("\n").map(move => {
                return <Typography key={move} component="p" fontWeight={theme.typography.fontWeightMedium} fontStyle="italic">{move}</Typography>
            })}


        </CardContent>
        <CardActions>
            <Stack direction="row">
                <IconButton color="warning" aria-label="edit" onClick={handleUpdate}><Edit /></IconButton>
                <IconButton color="error" aria-label="print" onClick={handleDelete}><Delete /></IconButton>
            </Stack>
        </CardActions>
    </Card>
}