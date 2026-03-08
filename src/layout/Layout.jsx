import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ toggleMode }) {
  const theme = useTheme();

  return (
    <>
      <Header toggleMode={toggleMode} />

      <Box
        sx={{
          display: "flex",
          flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
        }}
      >
        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}