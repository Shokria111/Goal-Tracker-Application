import React from "react";
import { useNavigate } from "react-router-dom";
import { useGoals } from "../../../context/GoalsContext";
import {
  Card,
  CardContent,
  Stack,
  Box,
  Typography,
  Chip,
  LinearProgress,
  Button,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function GoalCard({ goal }) {
  const { t } = useTranslation();
  const { markComplete, togglePause, deleteGoal } = useGoals();
  const navigate = useNavigate();
  

  const progressPercent = Math.min(
    Math.round((goal.progress / goal.target) * 100),
    100
  );

  const statusColor = {
    active: "primary",
    completed: "success",
    paused: "warning",
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          {/* Title + Status */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={600}>
              {goal.title}
            </Typography>

            <Chip
              label={t(goal.status)}
              color={statusColor[goal.status]}
              size="small"
            />
          </Stack>

          {/* Type */}
          <Typography variant="body2" color="text.secondary">
            {goal.type} • {t(goal.unit)}
          </Typography>

          {/* Category Chips */}
          <Stack direction="row" spacing={1}>
            <Chip label={goal.category} size="small" variant="outlined" />
            {goal.priority && (
              <Chip label={goal.priority} size="small" variant="outlined" />
            )}
          </Stack>

          {/* Progress */}
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={0.5}
            >
              <Typography variant="body2">
                {goal.progress}/{goal.target} {t(goal.unit)}
              </Typography>

              <Chip label={`${progressPercent}%`} size="small" />
            </Stack>

            <LinearProgress
              variant="determinate"
              value={progressPercent}
              sx={{ height: 8, borderRadius: 5 }}
            />

            <Typography variant="caption" color="text.secondary">
              {progressPercent}% {t("complete")}
            </Typography>
          </Box>

          <Divider />

          {/* Dates */}
          <Stack spacing={0.5}>
            <Typography variant="body2">
              {t("start")}: {goal.startDate}
            </Typography>

            {goal.endDate && (
              <Typography variant="body2">
                {t("end")}: {goal.endDate}
              </Typography>
            )}

            {goal.deadline && (
              <Typography variant="body2">
                {t("deadline")}: {goal.deadline}
              </Typography>
            )}
          </Stack>

          {/* Actions */}
          <Stack spacing={1}>

            <Button variant="outlined" fullWidth
              onClick={() => navigate(`/goals/${goal.id}`)}>
              {t("openGoalDetails")}
            </Button>

            <Button variant="contained" 
                disabled={goal.status === "completed"} 
                onClick={() => markComplete(goal.id)}>
              {t("markProgress")}
            </Button>

            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                color="warning"
                disabled={goal.status === "completed"}
                onClick={() => togglePause(goal.id)}
              >
                {goal.status === "paused" ? t("resume") : t("pause")}
              </Button>

              <Button variant="outlined" color="success"
                 onClick={() => navigate(`/goals/edit/${goal.id}`)} >
                {t("edit")}
              </Button>

              <Button variant="outlined" color="error"
                onClick={() => deleteGoal(goal.id)}>
                {t("delete")}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}