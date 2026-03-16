import React from "react";
  import { Box, Grid, Typography } from "@mui/material";
  import { useTranslation } from "react-i18next";
  import GoalCard from "./GoalCard";

  export default function GoalsList({ goals }) {
    const { t } = useTranslation();

    if (!goals || goals.length === 0) {
      return (
        <Box sx={{ mt: 3 }}>
          <Typography color="text.secondary">
            {t("noGoals")}
          </Typography>
        </Box>
      );
    }

    return (
      <Grid container spacing={3}>
        {goals.map((goal) => (
          <Grid item xs={12} md={6} lg={4} key={goal.id}>
            <GoalCard goal={goal} />{/* Each GoalCard will handle its own styling and content based on the goal data */}
          </Grid>
        ))}
      </Grid>
    );
  }

