import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography, Stack } from "@mui/material";
import { Translation, useTranslation } from "react-i18next";

//the graphical representation of how many of goals have been done or not(evry last secion)

export default function CompletedGoalsSummary({ completed, total }) {
  const {t} = useTranslation();
  const remaining = total - completed;

  return (
    <Stack alignItems="center" spacing={1}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: completed, label: t("completed"), color: "#4caf50" },
              { id: 1, value: remaining, label: t("remaining"), color: "#ccc" },
            ],
            innerRadius: 40,
            outerRadius: 60,
            paddingAngle: 2,
            cornerRadius: 4,
          },
        ]}
        width={140}
        height={140}
      />

      <Box textAlign="center">
        <Typography fontWeight={700}>
          {completed} / {total}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("completed")}
        </Typography>
      </Box>
    </Stack>
  );
}