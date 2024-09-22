import { Card, CardHeader, CardContent, Typography, Theme } from "@mui/material";
import { Creature } from "../models/creature";

export default function Statblock({ creature, theme }: { creature: Creature, theme: Theme }) {
    return <Card>
        <CardHeader title={creature.name} />
        <CardContent>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`${creature.hitpoints} hp`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`, ${creature.str} STR`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`, ${creature.dex} DEX`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{`, ${creature.wis} WIS`}</Typography>
            <Typography component="span" fontWeight={theme.typography.fontWeightBold}>{creature.armor > 0 ? `, armor ${creature.armor}` : ''}</Typography>
        </CardContent>
    </Card>
}