import { useParams } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";
import { Typography, Stack, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function GoalDetails() {
  const { id } = useParams();
  const { goals } = useGoals();

  const goal = goals.find((g) => g.id === Number(id));

  if (!goal) {
    return <Typography>Goal not found</Typography>;
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">{goal.title}</Typography>
        <Typography>Category: {goal.category}</Typography>
        <Typography>Type: {goal.type}</Typography>
        <Typography>Target: {goal.target}</Typography>
        <Typography>Progress: {goal.progress}</Typography>
        <Typography>Status: {goal.status}</Typography>
        <Typography>Start Date: {goal.startDate}</Typography>
        <Typography>End Date: {goal.endDate}</Typography>
        <Typography>Notes: {goal.notes}</Typography>
        <button onClick={() => navigate("/goals")}>
          <ArrowBack /> {t("backToGoals")}
        </button>
      </Stack>
    </Paper>
  );
}