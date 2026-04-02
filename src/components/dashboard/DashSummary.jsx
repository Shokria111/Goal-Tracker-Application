import { useGoals } from "../../context/GoalsContext";
import IncompleteCircleIcon from '@mui/icons-material/IncompleteCircle';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DataExplorationIcon from '@mui/icons-material/DataExploration';
import StatCard from "../goalsPage/goalPageComponents/StatCard";
import { Grid } from "@mui/material";
import { Translation } from "react-i18next";

// the second section of project where you see the progress xp and streak and many more staff

export default function DashSummary({ progressRate, completedCount, streak, xp }) {

  const DashState = [
    { id: 1, title: "progressRate", value: `${progressRate}%`, icon: <IncompleteCircleIcon fontSize="inherit" />, color: "primary" },
    { id: 2, title: "completedGoals", value: completedCount, icon: <ChecklistIcon fontSize="inherit" />, color: "info" },
    { id: 3, title: "streak", value: streak, icon: <LocalFireDepartmentIcon fontSize="inherit" />, color: "success" },
    { id: 4, title: "xp", value: xp, icon: <DataExplorationIcon fontSize="inherit" />, color: "warning" }
  ];

  return (
<Grid container spacing={3} mb={3}>
  {DashState.map((stat) => (
    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.id} sx={{ display: "flex" }}>
          <StatCard
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        </Grid>
      ))}
    </Grid>
  );
}