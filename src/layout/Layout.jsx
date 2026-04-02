import { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ toggleMode }) {
  const theme = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header toggleMode={toggleMode} onMenuClick={()=>setSidebarOpen(true)}/>

      <Box
        sx={{
          display: "flex",
          flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
        }}
      >
        <Sidebar open={sidebarOpen} onClose={()=> setSidebarOpen(false)}/>

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}