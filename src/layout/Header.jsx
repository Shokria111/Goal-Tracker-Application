import { Box } from "@mui/material";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DvrIcon from '@mui/icons-material/Dvr';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ toggleMode }) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <AppBar position="static" elevation={24}>
      <Toolbar sx={{ gap: 3 }}>
        <IconButton color="inherit" edge="start">
          <DvrIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            <AddTaskIcon sx={{ display: { xs: "none", sm: "inline-flex" }, mr: 1 }} />
            Goal Tracker Application
          </Typography>
        </Box>

        <LanguageSwitcher />

        <Tooltip title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}