import { Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

export default function LanguageSettingCard() {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "center" }}
        spacing={2}
      >
        <Stack spacing={0.5}>
          <Typography variant="h6" fontWeight={700}>
            {t("language")}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {t("languageSubtitle")}
          </Typography>
        </Stack>

        <LanguageSwitcher variant="settings" />
      </Stack>
    </Paper>
  );
}