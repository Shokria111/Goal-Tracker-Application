import { Grid, Typography, Stack } from "@mui/material";
import CategoryCard from "./CardCategory";
import { useGoals } from "../../context/GoalsContext";
import { useTranslation } from "react-i18next";

export default function CardParent() {
  const { goals } = useGoals();
  const { t } = useTranslation();
  const categoryMap = {};

  goals.forEach((goal) => {
    const cat = goal.category;

    if (!categoryMap[cat]) {
      categoryMap[cat] = {
        name: cat,
        total: 0,
        active: 0,
        completed: 0,
        paused: 0,
      };
    }

    categoryMap[cat].total++;

    if (goal.status === "active") categoryMap[cat].active++;
    if (goal.status === "completed") categoryMap[cat].completed++;
    if (goal.status === "paused") categoryMap[cat].paused++;
  });

  const categories = Object.values(categoryMap).map((cat) => ({
    ...cat,
    progress: cat.total
      ? Math.round((cat.completed / cat.total) * 100)
      : 0,
  }));

  return (
    <Stack spacing={2} mt={4} sx={{ width: "100%", minWidth: 0 }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" fontWeight={700}>
          {t("categoryCardsTitle")}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {t("categoryCardsSubtitle")}
        </Typography>
      </Stack>

      <Grid container spacing={2.5} sx={{ width: "100%", m: 0 }}>
        {categories.map((category) => (
          <Grid key={category.name} size={{ xs: 12, sm: 6, md: 4 }} sx={{ minWidth: 0 }}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}