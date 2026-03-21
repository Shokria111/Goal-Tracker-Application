import { useState } from 'react';
import { Paper, Stack, Typography, TextField, MenuItem, Button } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { useGoals } from '../../../context/GoalsContext';
import { useParams } from 'react-router-dom';

export default function GoalForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { goals, createGoal, updateGoal } = useGoals();
  const { id } = useParams();

  const existingGoal = goals.find((g) => g.id === Number(id));
  const [title, setTitle] = useState(existingGoal?.title || "");
  const [category, setCategory] = useState(existingGoal?.category || "");
  const [goalType, setGoalType] = useState(existingGoal?.type || "daily");
  const [target, setTarget] = useState(existingGoal?.target || "");
  const [startDate, setStartDate] = useState(existingGoal?.startDate || "");
  const [endDate, setEndDate] = useState(existingGoal?.endDate || "");
  const [notes, setNotes] = useState(existingGoal?.notes || "");  

  const handleSubmit = (event) => {
  event.preventDefault();

  if (id) {
    updateGoal({
      ...existingGoal,
      title,
      category,
      type: goalType,
      target: Number(target),
      startDate,
      endDate,
      notes,
      updatedAt: new Date().toISOString(),
    });
  } else {
    const newGoal = {
      id: Date.now(),
      title,
      category,
      type: goalType,
      target: Number(target),
      progress: 0,
      status: "active",
      startDate,
      endDate,
      notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      logs: [],
    };

    createGoal(newGoal);
  }

  navigate("/goals");
};



  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
      }}>

      <Stack spacing={3}>
        <Typography variant='h5' fontWeight={700}>
          {t("createGoal")}
        </Typography>

        <TextField
          label={t("goalTitle")}
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <TextField
          select
          label={t("category")}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          required
        >
          <MenuItem value="Health">{t("health")}</MenuItem>
          <MenuItem value="study">{t("study")}</MenuItem>
          <MenuItem value="work">{t("work")}</MenuItem>
          <MenuItem value="personal">{t("personal")}</MenuItem>
        </TextField>

        <TextField
          select
          label={t("goalType")}
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          fullWidth
          required
        >
          <MenuItem value="daily">{t("daily")}</MenuItem>
          <MenuItem value="count">{t("count")}</MenuItem>
          <MenuItem value="time">{t("time")}</MenuItem>
        </TextField>

        <TextField
          label={t("target")}
          type="number"
          fullWidth
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          required
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            label={t("startDate")}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label={t("endDate")}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Stack>
        
        <TextField
          label={t("notes")}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
          multiline
          minRows={3}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={() => navigate("/goals")}>
            {t("cancel")}
          </Button>

          <Button variant="contained" type="submit">
            {t("saveGoal")}
          </Button>

        </Stack>
      </Stack>
    </Paper>
  );
}