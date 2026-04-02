import {
  Paper,
  Stack,
  Typography,
  LinearProgress,
  Box,
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CategoryCard({ category }) {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        minWidth: 0,
        p: { xs: 2, sm: 2.5 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        height: "100%",
        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          ...(theme.palette.mode === "dark"
            ? {
              boxShadow: `0 0 0 1px ${theme.palette.primary.main}, 0 8px 24px rgba(0,0,0,0.5)`,
            }
            : {
              boxShadow: theme.shadows[4],
            }),
        },

      })}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          flexWrap="wrap"
        >
          <Typography variant="h6" fontWeight={800}>
            {category.name}
          </Typography>

          <Chip
            label={`${category.total} ${t("goals")}`}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1.25}
          useFlexGap
          flexWrap="wrap"
        >
          <Box
            sx={{
              flex: "1 1 120px",
              minWidth: 0,
              p: 1.25,
              borderRadius: 2.5,
              bgcolor: "action.hover",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {t("active")}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {category.active}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: "1 1 120px",
              minWidth: 0,
              p: 1.25,
              borderRadius: 2.5,
              bgcolor: "action.hover",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {t("completed")}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {category.completed}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: "1 1 120px",
              minWidth: 0,
              p: 1.25,
              borderRadius: 2.5,
              bgcolor: "action.hover",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {t("paused")}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {category.paused}
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={0.75}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              {t("progress")}
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              {category.progress}%
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={category.progress}
            sx={{
              height: 10,
              borderRadius: 999,
            }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}