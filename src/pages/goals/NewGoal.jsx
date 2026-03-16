import { Stack, Typography, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import GoalForm from "../../components/goalsPage/NewGoalComponent/GoalForm";

export default function NewGoal() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack spacing={3}>
      
      <Box>
        <Typography variant="h4" fontWeight={700}>
          {t("createGoal")}
        </Typography>

        <Typography color="text.secondary">
          {t("manageGoals")}
        </Typography>
      </Box>

      <GoalForm />
    </Stack>
  );
}