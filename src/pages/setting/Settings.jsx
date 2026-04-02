import { Box, Grid, Stack } from "@mui/material";
import HeaderSetting from "../../components/setting/HeaderSetting";
import LanguageSettingCard from "../../components/setting/LanguageSettingCard";
import ThemeSettingCard from "../../components/setting/ThemeSettingCard";

export default function Settings({ toggleMode }) {
  return (
    <Box>
      <Stack spacing={3}>
        <HeaderSetting />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <LanguageSettingCard />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ThemeSettingCard toggleMode={toggleMode} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}