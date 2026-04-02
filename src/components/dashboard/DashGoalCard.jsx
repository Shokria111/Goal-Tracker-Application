import { Card, CardContent, Stack, Typography, Chip, LinearProgress, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";

// the goal card that shows detials of the goals we are working on

export default function DashboardGoalCard({ goal }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { togglePause, deleteGoal, updateProgress } = useGoals();

  const progressPercent = goal.target
    ? Math.min(Math.round((goal.progress / goal.target) * 100), 100)
    : 0;

  const statusColor = {
    active: "primary",
    completed: "success",
    paused: "warning",
  };

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        borderRadius: 3,
        borderColor: "divider",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          ...(theme.palette.mode === "dark"
            ? {
              boxShadow: `0 0 0 1px ${theme.palette.primary.main}, 0 6px 20px rgba(0,0,0,0.6)`,
            }
            : {
              boxShadow: theme.shadows[4],
            }),
        },
      })}
    >

      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h6" fontWeight={700}>
              {goal.title}
            </Typography>

            <Chip
              label={t(goal.status)}
              color={statusColor[goal.status]}
              size="small"
            />
          </Stack>

          <Box>
            <Chip label={goal.category} size="small" variant="outlined" />
          </Box>

          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" color="text.secondary">
                {goal.progress}/{goal.target}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {progressPercent}%
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={progressPercent}
              sx={{ height: 8, borderRadius: 5 }}
            />
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Button
              variant="contained"
              size="small"
              onClick={() => updateProgress(goal.id)}
              disabled={goal.status === "completed"}
            >
              {t("markProgress")}
            </Button>

            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate(`/goals/edit/${goal.id}`)}
            >
              {t("edit")}
            </Button>

            <Button
              variant="outlined"
              size="small"
              color="warning"
              onClick={() => togglePause(goal.id)}
              disabled={goal.status === "completed"}
            >
              {goal.status === "paused" ? t("resume") : t("pause")}
            </Button>

            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={() => deleteGoal(goal.id)}
            >
              {t("delete")}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card >
  );
}
