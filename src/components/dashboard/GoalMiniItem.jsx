import { Paper, Stack, Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

//mini goal item that shows compeleted goals namen, no more detials

export default function DashboardMiniGoalCard({ goal }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        border: "2px solid",
        borderColor: "divider",
        height: "100%",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "success.main",
          boxShadow: "2 blue",
        },
      }}
    >
      <Box sx={{ height: 3, bgcolor: "success.main" }} />

      <Stack spacing={1.5} sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              flex: 1,
              lineHeight: 1.3,
              wordBreak: "break-word",
            }}
          >
            {goal.title}
          </Typography>

          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              bgcolor: "success.light",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CheckCircleOutlineIcon
              sx={{
                color: "success.main",
                fontSize: 22,
              }}
            />
          </Box>
        </Stack>

        <Button
          variant="text"
          size="small"
          onClick={() => navigate(`/goals/${goal.id}`)}
          sx={{
            alignSelf: "flex-start",
            px: 0,
            minWidth: 0,
            fontWeight: 600,
          }}
        >
          {t("seeDetails")}
        </Button>
      </Stack>
    </Paper>
  );
}