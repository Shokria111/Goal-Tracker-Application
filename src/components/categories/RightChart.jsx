import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { useGoals } from "../../context/GoalsContext";
import { useTranslation } from "react-i18next";

export default function RightChart() {
  const { goals } = useGoals();
  const { t } = useTranslation();

  const categoryMap = {};

  goals.forEach((goal) => {
    const cat = goal.category;

    if (!categoryMap[cat]) {
      categoryMap[cat] = {
        name: cat,
        active: 0,
        completed: 0,
        paused: 0,
      };
    }

    if (goal.status === "active") categoryMap[cat].active++;
    if (goal.status === "completed") categoryMap[cat].completed++;
    if (goal.status === "paused") categoryMap[cat].paused++;
  });

  const categories = Object.values(categoryMap);

  const labels = categories.map((cat) => cat.name);
  const activeValues = categories.map((cat) => cat.active);
  const completedValues = categories.map((cat) => cat.completed);
  const pausedValues = categories.map((cat) => cat.paused);

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
      <LineChart
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }}
        xAxis={[
          {
            scaleType: "point",
            data: labels,
          },
        ]}
        series={[
          {
            data: activeValues,
            label: t("active"),
            color: "#2196f3",
            strokeWidth: 3,
          },
          {
            data: completedValues,
            label: t("completed"),
            color: "#ff9800",
            strokeWidth: 3,
          },
          {
            data: pausedValues,
            label: t("paused"),
            color: "#f44336",
            strokeWidth: 3,
          },
        ]}
        height={300}
      />
    </Box>
  );
}