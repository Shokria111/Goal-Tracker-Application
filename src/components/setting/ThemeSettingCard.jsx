import { Paper, Stack, Typography, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";

export default function ThemeSettingCard({ toggleMode }) {
  const theme = useTheme();
  const mode = theme.palette.mode;
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
            {t("appearance")}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {t("appearanceSubtitle")}
          </Typography>
        </Stack>

        <Tooltip
          title={
            mode === "dark"
              ? t("switchToLight")
              : t("switchToDark")
          }
        >
          <IconButton
            onClick={toggleMode}
            sx={(theme) => ({
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              transition: "all 0.2s ease",

              "&:hover": {
                borderColor: "primary.main",
                bgcolor: "action.hover",
                transform: "scale(1.05)",
              },
            })}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Paper>
  );
}