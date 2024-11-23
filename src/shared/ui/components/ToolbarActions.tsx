import { Stack } from "@mui/material";
import LanguageMenu from "@shared/ui/components/LanguageMenu/LanguageMenu";
import { ThemeSwitcher } from "@toolpad/core";

export function ToolbarActions() {
  return (
    <Stack direction="row">
      <LanguageMenu />
      <ThemeSwitcher />
    </Stack>
  );
}
