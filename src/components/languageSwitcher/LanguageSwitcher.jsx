import { Stack, Button, IconButton, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function LanguageSwitcher({ variant = "settings" }) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === "en";

  if (variant === "header") {
    return (
      <Tooltip title={isEnglish ? "فارسی" : "English"}>
        <IconButton
          color="inherit"
          onClick={toggleLanguage}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            transition: "all 0.2s ease",
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: "action.hover",
              transform: "scale(1.05)",
            },
          }}
        >
          <LanguageOutlinedIcon />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Stack direction="row">
      <Button
        onClick={toggleLanguage}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          px: 2,
          py: 0.5,
          minWidth: 80,
          transition: "all 0.2s ease",
          ...(isEnglish
            ? {
                bgcolor: "primary.main",
                color: "primary.contrastText",
              }
            : {}),
          "&:hover": {
            borderColor: "primary.main",
            bgcolor: "action.hover",
            transform: "scale(1.05)",
          },
        }}
      >
        {isEnglish ? "فارسی" : "EN"}
      </Button>
    </Stack>
  );
}