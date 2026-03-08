import { Box, Typography } from "@mui/material";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Settings() {
  return (
    <Box>
      <Typography variant="h5">Settings</Typography>
      <LanguageSwitcher />
    </Box>
  );
}