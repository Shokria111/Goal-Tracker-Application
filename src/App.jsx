import { useMemo, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation, I18nextProvider } from "react-i18next";
import { GoalsProvider } from "./context/GoalsContext";

import i18n from "./i18next";
import getTheme from "./theme/theme";
import { createRtlCache } from "./theme/rtlCache";
import GoalDetails from "./pages/goals/GoalDetails";
import Layout from "./layout/layout";
import DashBoard from "./pages/dashboard/Dashboard";
import Goals from "./pages/goals/Goals";
import NewGoal from "./pages/goals/NewGoal";
import Categories from "./pages/categories/Categories";
import Settings from "./pages/setting/Settings";
import NotFound from "./pages/notFound/NotFound";


function AppContent() {
  const { i18n } = useTranslation();
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const direction = i18n.language === "fa" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);

  const theme = useMemo(() => getTheme(mode, direction), [mode, direction]);
  const cache = useMemo(() => createRtlCache(direction), [direction]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <GoalsProvider>
           <Routes>
              <Route path="/" element={<Layout mode={mode} toggleMode={toggleMode} />}>
                <Route index element={<DashBoard />} />
                <Route path="dashboard" element={<DashBoard />} />

                <Route path="goals" element={<Goals />} />
                <Route path="goals/new" element={<NewGoal />} />
                <Route path="goals/edit/:id" element={<NewGoal />} />
                <Route path="goals/:id" element={<GoalDetails />} />

                <Route path="categories" element={<Categories />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </GoalsProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  );
}