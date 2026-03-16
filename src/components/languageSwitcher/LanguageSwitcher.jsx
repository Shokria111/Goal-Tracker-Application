import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button color="inherit" onClick={toggleLanguage}>
      {i18n.language === "en" ? "فارسی" : "EN"}
    </Button>
  );
}