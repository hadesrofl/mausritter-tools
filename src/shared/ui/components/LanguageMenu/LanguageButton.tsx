import { Stack, Typography } from "@mui/material";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "@i18n/i18next";
import { TranslationsLanguages } from "@i18n/locales/translationNamespaces";

interface LanguageButtonProps {
  languageIsoCode: string;
  languageTranslationKey: string;
}

export default function LanguageItem(props: LanguageButtonProps) {
  const { languageIsoCode, languageTranslationKey } = props;
  const { t } = useTranslation(TranslationsLanguages);
  const translation = t(`Languages.${languageTranslationKey}`);
  const languageFlagClassname = `fi fi-${languageIsoCode}`;

  return (
    <Stack direction="row" spacing={2}>
      <span className={languageFlagClassname} />
      <Typography variant="body1">{translation}</Typography>
    </Stack>
  );
}
