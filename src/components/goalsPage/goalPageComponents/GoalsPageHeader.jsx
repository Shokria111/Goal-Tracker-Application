import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function GoalsPageHeader() {
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
        <Typography variant="h4" fontWeight={900}>{/*the title of goal the page with description */}
          {t("goals")}
        </Typography>

        <Typography color="text.secondary">
          {t("manageGoals")}
        </Typography>
      </Stack>


      <Button //the button to add a new goal that will navigate to the new goal page
        component={Link}
        to="/goals/new"
        variant="contained"
      >
        {t("newGoal")}
      </Button>
    </Stack>
  )
}