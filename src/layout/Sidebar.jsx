import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";

const items = [
  { label: "dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "goals", icon: <AddTaskIcon />, path: "/goals" },
  { label: "categories", icon: <CategoryIcon />, path: "/categories" },
  { label: "settings", icon: <SettingsIcon />, path: "/settings" },
];

export default function Sidebar() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "calc(100vh - 64px)",
        p: 2,
        borderRight: theme.direction === "ltr" ? "1px solid" : undefined,
        borderLeft: theme.direction === "rtl" ? "1px solid" : undefined,
        borderColor: "divider",
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 1, color: "text.secondary" }}>
        {t("sidebar")}
      </Typography>

      <List>
        {items.map((item) => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={t(item.label)} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}