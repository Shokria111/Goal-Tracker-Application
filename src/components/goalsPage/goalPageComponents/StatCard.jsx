import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, Box } from '@mui/material';


export default function StatCard({ title, value, icon, color }) {
  const { t } = useTranslation();
  return(
    <Card variant='outlined' 
        sx={{
              borderRadius: 2,
              height: "100%",
              width: "100%",
              borderColor: "divider",
              transition: "0.2s",
              "&:hover": {boxShadow: 3}
     }}>
      <CardContent 
            sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }}>
        <Box sx={{ minHeight: 72 }}>
          <Box 
            sx={{ 
                fontSize: 40,
                color: "text.secondary",
                width: 44,
                height: 44,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: `${color}.light`
              }}>
              {icon}
            </Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
           {t(title)}
          </Typography>
        </Box>
        <Box 
          sx={{ fontSize: 24,
                fontWeight: "bold",}}>
          <Typography variant="h5" sx={{ mt: 0.5 }}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}