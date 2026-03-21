import Grid from "@mui/material/Grid";
import StatCard from "./StatCard";
import FlagIcon from '@mui/icons-material/Flag';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';


export default function StatCardsLoop({totalGoals, activeGoals, completedGoals, pausedGoals}) {



const stats = [
  { id: 1, title: "totalGoals", value: totalGoals, icon: <FlagIcon fontSize="inherit" />, color: "primary" },
  { id: 2, title: "active", value: activeGoals, icon: <PlayCircleIcon fontSize="inherit" />, color: "info" },
  { id: 3, title: "completed", value: completedGoals, icon: <CheckCircleIcon fontSize="inherit" />, color: "success" },
  { id: 4, title: "paused", value: pausedGoals, icon: <PauseCircleIcon fontSize="inherit" />, color: "warning" }
];

  return(
    <Grid container spacing={3} mb={3}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.id}>
          <StatCard 
            title={stat.title}
            value={stat.value} 
            icon={stat.icon} 
            color={stat.color} />
        </Grid>
      ))}
    </Grid>
  )
}
