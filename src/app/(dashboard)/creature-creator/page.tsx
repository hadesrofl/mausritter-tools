"use client";
import CreatureGallery from "@features/creature-creator/pages/creatureGallery";
import { PageContainer } from "@toolpad/core/PageContainer";
import { useTranslation } from "@i18n/i18next";
import { TranslationsCreatureCreator } from "@i18n/locales/translationNamespaces";

export default function CreatureCreatorPage() {
  const { t } = useTranslation(TranslationsCreatureCreator);
  return (
    <PageContainer maxWidth={false} title={t("Title")}>
      <CreatureGallery />
    </PageContainer>
  );
}
