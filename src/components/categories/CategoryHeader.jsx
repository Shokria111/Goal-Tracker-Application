import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CategoryHeader() {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "stretch", md: "center" }}
      spacing={2}
      pb={1}
    >
      <Stack spacing={0.75}>
        <Typography variant="h4" fontWeight={900}>
          {t("categories")}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {t("categorySubtitle")}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Button
          component={Link}
          to="/goals"
          variant="contained"
        >
          {t("viewAllGoals")}
        </Button>

        <Button
          component={Link}
          to="/"
          variant="outlined"
        >
          {t("dashboard")}
        </Button>
      </Stack>
    </Stack>
  );
}