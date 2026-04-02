import { Box } from "@mui/material";
import LanguageSwitcher from "../components/languageSwitcher/LanguageSwitcher";
import { useTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DvrIcon from '@mui/icons-material/Dvr';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ toggleMode, onMenuClick }) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <AppBar position="static" elevation={24}>
      <Toolbar sx={{ gap: 3 }}>
        <IconButton color="inherit" edge="start" onClick={onMenuClick}>
          <DvrIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Goal Tracker Application
          </Typography>
        </Box>

        <LanguageSwitcher variant="header" />

        <Tooltip title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <IconButton
            onClick={toggleMode}
            sx={(theme) => ({
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              transition: "all 0.2s ease",

              "&:hover": {
                borderColor: "primary.main",
                bgcolor: theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "action.hover",
              },
            })}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}