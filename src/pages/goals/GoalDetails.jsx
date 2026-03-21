import { useParams } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";
import { Typography, Stack, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function GoalDetails() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();
  const { goals } = useGoals();

  const goal = goals.find((g) => g.id === Number(id));

  if (!goal) {
    return <Typography>{t("noGoals")}</Typography>;
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">{goal.title}</Typography>
        <Typography>{t("category")}: {goal.category}</Typography>
        <Typography>{t("goalType")}: {goal.type}</Typography>
        <Typography>{t("target")}: {goal.target}</Typography>
        <Typography>{t("progress")}: {goal.progress}</Typography>
        <Typography>{t("status")}: {goal.status}</Typography>
        <Typography>{t("startDate")}: {goal.startDate}</Typography>
        <Typography>{t("endDate")}: {goal.endDate}</Typography>
        <Typography>{t("notes")}: {goal.notes}</Typography>
        <Button startIcon={<ArrowBack />} onClick={() => navigate("/goals")}>
          {t("backToGoals")}
        </Button>
      </Stack>
    </Paper>
  );
}