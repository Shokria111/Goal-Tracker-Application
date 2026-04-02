import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";

const drawerWidth = 240;

const items = [
  { label: "dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "goals", icon: <AddTaskIcon />, path: "/goals" },
  { label: "categories", icon: <CategoryIcon />, path: "/categories" },
  { label: "settings", icon: <SettingsIcon />, path: "/settings" },
];

function SidebarContent({ onItemClick }) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: drawerWidth,
        minHeight: "100%",
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
            onClick={onItemClick}
            sx={{ borderRadius: 2, mb: 0.5 }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={t(item.label)} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default function Sidebar({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Drawer
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarContent onItemClick={onClose} />
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
    >
      <SidebarContent />
    </Box>
  );
}