import React from "react";
import {
  Box,
  MenuItem,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function GoalsFilters({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  statusFilter,
  setStatusFilter,
}) {
  const { t } = useTranslation();

  const handleTabChange = (_, newValue) => {
    setStatusFilter(newValue);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        mb: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Stack spacing={2.5}>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            {t("filtersSorting")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("manageGoals")}
          </Typography>
        </Box>

        <Tabs
          value={statusFilter}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 44,
            "& .MuiTab-root": {
              textTransform: "none",
              minHeight: 44,
              fontWeight: 500,
            },
          }}
        >
          <Tab label={t("all")} value="all" />
          <Tab label={t("active")} value="active" />
          <Tab label={t("completed")} value="completed" />
          <Tab label={t("paused")} value="paused" />
        </Tabs>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            label={t("searchbyTitle")}
            placeholder={t("searchGoals")}
            fullWidth
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <TextField
            select
            label={t("sortBy")}
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            sx={{ minWidth: { xs: "100%", md: 220 } }}
          >
            <MenuItem value="createdAt">{t("creationDate")}</MenuItem>
            <MenuItem value="dueDate">{t("dueDate")}</MenuItem>
            <MenuItem value="progress">{t("progress")}</MenuItem>
            <MenuItem value="title">{t("title")}</MenuItem>
          </TextField>
        </Stack>
      </Stack>
    </Paper>
  );
}                                                                                                                                      