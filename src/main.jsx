import { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation, I18nextProvider } from "react-i18next";

import i18n from "./i18next";
import App from "./App";
import { createRtlCache } from "./theme/rtlCache";
import getTheme from "./theme";

function AppWrapper() {
  const { i18n } = useTranslation();

  const [mode, setMode] = useState("light");

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const direction = i18n.language === "fa" ? "rtl" : "ltr";

  document.documentElement.setAttribute("dir", direction);

  const theme = useMemo(
    () => getTheme(mode, direction),
    [mode, direction]
  );

  const cache = useMemo(() => createRtlCache(direction), [direction]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App mode={mode} toggleMode={toggleMode} />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <AppWrapper />
  </I18nextProvider>
);