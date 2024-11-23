import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import { Creature } from "../models/creature";
import { Delete, Edit } from "@mui/icons-material";
import { TFunction } from "i18next";

interface StatblockProps {
  creature: Creature;
  theme: Theme;
  onUpdate: (creature: Creature) => void;
  onDelete: (creature: Creature) => void;
  t: TFunction;
}

export default function Statblock({
  creature,
  theme,
  onUpdate,
  onDelete,
  t,
}: StatblockProps) {
  const handleUpdate = () => {
    onUpdate(creature);
  };

  const handleDelete = () => {
    onDelete(creature);
  };

  return (
    <Card>
      <CardHeader title={creature.name} />
      <CardContent>
        <Typography
          component="span"
          fontWeight={theme.typography.fontWeightBold}
        >{`${creature.hitpoints} ${t("Attributes.hp")}`}</Typography>
        <Typography
          component="span"
          fontWeight={theme.typography.fontWeightBold}
        >{`, ${creature.str} ${t("Attributes.STR")}`}</Typography>
        <Typography
          component="span"
          fontWeight={theme.typography.fontWeightBold}
        >{`, ${creature.dex} ${t("Attributes.DEX")}`}</Typography>
        <Typography
          component="span"
          fontWeight={theme.typography.fontWeightBold}
        >{`, ${creature.wis} ${t("Attributes.WIL")}`}</Typography>
        <Typography
          component="span"
          fontWeight={theme.typography.fontWeightBold}
        >
          {creature.armor > 0 ? `, ${t("armor")} ${creature.armor}` : ""}
        </Typography>

        {creature.attacks.split("\n").map((attack, idx) => {
          return (
            <Typography
              key={attack}
              component="p"
              fontWeight={theme.typography.fontWeightBold}
            >
              {idx === 0 && attack !== ""
                ? `${t("Attacks")}: ${attack}`
                : attack}
            </Typography>
          );
        })}

        {creature.specialMoves.split("\n").map((move) => {
          return (
            <Typography
              key={move}
              component="p"
              fontWeight={theme.typography.fontWeightMedium}
              fontStyle="italic"
            >
              {move}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions>
        <Stack direction="row">
          <IconButton color="warning" aria-label="edit" onClick={handleUpdate}>
            <Edit />
          </IconButton>
          <IconButton color="error" aria-label="print" onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
