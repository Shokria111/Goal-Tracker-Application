import { Typography , Stack } from "@mui/material";
import { useTranslation } from "react-i18next";


export default function HeaderSetting(){
  const {t} = useTranslation();

  return(
    <Stack>
      <Typography variant="h4" fontWeight={900}>
        {t("settings")}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {t("settingsSubtitle")}
      </Typography>
    </Stack>
    
  )
}











