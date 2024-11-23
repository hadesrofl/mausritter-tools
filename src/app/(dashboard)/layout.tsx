"use client";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DialogsProvider } from "@toolpad/core/useDialogs";
import { ReactNode } from "react";
import { ToolbarActions } from "@shared/ui/components/ToolbarActions";
import { navigation } from "./navigation";
import { branding } from "./branding";
import { AppProvider } from "@toolpad/core";
import { useTranslation } from "@i18n/i18next";
import { TranslationsNavigation } from "@i18n/locales/translationNamespaces";

export default function DashboardPagesLayout(props: { children: ReactNode }) {
  const { t } = useTranslation(TranslationsNavigation);
  return (
    <AppProvider navigation={navigation(t)} branding={branding(t)}>
      <DashboardLayout slots={{ toolbarActions: ToolbarActions }}>
        <DialogsProvider>{props.children}</DialogsProvider>
      </DashboardLayout>
    </AppProvider>
  );
}
