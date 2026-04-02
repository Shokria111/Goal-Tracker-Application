import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import DashboardGoalCard from "./DashGoalCard";

//the section where the active goals are showed and we can track the process
export default function ActiveGoals({ goals }) {
  const { t } = useTranslation();

  if (!goals || goals.length === 0) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography>{t("noActiveGoals")}</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight={600}>
          {t("activeGoalsSection")}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {t("activeGoalsSubtitle")}
        </Typography>

        <Grid container spacing={3}>
          {goals.map((goal) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={goal.id}
              sx={{ display: "flex" }}
            >
              <DashboardGoalCard goal={goal} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
}