import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//the very top section of dashboard 

export default function DashHeader() {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "stretch", md: "center" }}
      spacing={2}
      mb={3}
    >
      <Stack spacing={0.75}>
        <Typography variant="h4" fontWeight={900}>
          {t("dashboard")}
        </Typography>

        <Typography color="text.secondary">
          {t("dashboardSubtitle")}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button
          component={Link}
          to="/goals/new"
          variant="contained"
        >
          {t("newGoal")}
        </Button>

        <Button
          component={Link}
          to="/goals"
          variant="outlined"
        >
          {t("viewAllGoals")}
        </Button>
      </Stack>
    </Stack>
  );
}