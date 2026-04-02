import { Stack, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "70vh",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h3" fontWeight={900}>
            404
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            {t("pageNotFound")}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {t("pageNotFoundSubtitle")}
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{ mt: 1 }}
          >
            {t("goHome")}
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}