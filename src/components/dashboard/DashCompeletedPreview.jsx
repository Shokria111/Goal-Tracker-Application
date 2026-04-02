import { Paper, Stack, Typography, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DashboardMiniGoalCard from "./GoalMiniItem";
import CompletedGoalsSummary from "./CompeletedSummary";

//this is the evry last part that reports about goals that have been completed. 
export default function DashboardCompletedPreview({ goals, completed, total }) {
  const { t } = useTranslation();

  if (!goals || goals.length === 0) {
    return (
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={700}>
            {t("completedGoalsSection")}
          </Typography>

          <Typography color="text.secondary">
            {t("noCompletedGoals")}
          </Typography>
        </Stack>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Stack spacing={2}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", md: "center" }}
          spacing={2}
        >
          <Stack spacing={0.5}>
            <Typography variant="h6" fontWeight={700}>
              {t("completedGoalsSection")}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {t("completedGoalsSubtitle")}
            </Typography>
          </Stack>

          <Button component={Link} to="/goals" variant="outlined">
            {t("viewAllGoals")}
          </Button>
        </Stack>
        
        <Grid container spacing={3}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              {goals.map((goal) => (
                <DashboardMiniGoalCard key={goal.id} goal={goal} />
              ))}
            </Stack>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <CompletedGoalsSummary completed={completed} total={total} />
          </Grid>
        </Grid>

      </Stack>
    </Paper>
  );
}