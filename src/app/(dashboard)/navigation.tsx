import Pets from "@mui/icons-material/Pets";
import { Navigation } from "@toolpad/core";
import { TFunction } from "i18next";

export const navigation: (t: TFunction) => Navigation = (t: TFunction) => {
  return [
    {
      segment: "creature-creator",
      title: t("Creature Creator"),
      icon: <Pets />,
    },
  ];
};
