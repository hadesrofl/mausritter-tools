import PestControlRodent from "@mui/icons-material/PestControlRodent";
import { Branding } from "@toolpad/core";
import { TFunction } from "i18next";

export const branding: (t: TFunction) => Branding = (t: TFunction) => {
  return {
    title: t("Mausritter Tools"),
    logo: <PestControlRodent sx={{ margin: 0.5 }} />,
  };
};