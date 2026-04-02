import { Box, Stack, Typography } from "@mui/material";
import { useGoals } from "../../context/GoalsContext";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTranslation } from "react-i18next";

export default function LeftChart() {
  const { goals } = useGoals();
  const { t } = useTranslation();
  const categoryMap = {};

  goals.forEach((goal) => {
    const cat = goal.category;

    if (!categoryMap[cat]) {
      categoryMap[cat] = {
        name: cat,
        completed: 0,
        total: 0,
      };
    }

    categoryMap[cat].total++;

    if (goal.status === "completed") {
      categoryMap[cat].completed++;
    }
  });

  const categories = Object.values(categoryMap);
  const colors = ["#4caf50", "#2196f3", "#ff9800", "#e91e63", "#9c27b0"];

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        overflowX: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [t("completed")],
          },
        ]}
        series={categories.map((cat, index) => ({
          data: [cat.completed],
          label: cat.name,
          color: colors[index % colors.length],
        }))}
        slotProps={{
          legend: { hidden: true },
        }}
        height={300}
      />


      <Stack spacing={1} mt={2}>
        {categories.map((cat, index) => (
          <Stack key={cat.name} direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: colors[index % colors.length],
              }}
            />
            <Typography variant="body2">{cat.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}