import { Paper, Stack, Typography, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";

export default function CategoryAnalyticsSection() {
  const { t } = useTranslation();

  return (
    <Paper sx={{
       p: { xs: 2, md: 3 },
        borderRadius: 3,
        width: "100%",
        minWidth: 0, }}
    >
      <Stack spacing={2} sx={{ width: "100%", minWidth: 0 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", md: "center" }}
          spacing={2}
        >
          <Stack spacing={0.5}>
            <Typography variant="h6" fontWeight={700}>
              {t("categoryAnalytics")}
            </Typography>
          </Stack>
        </Stack>


        <Grid container spacing={3} sx={{ width: "100%", m: 0 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }} >
            <LeftChart />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ minWidth: 0 }}>
            <RightChart />
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}