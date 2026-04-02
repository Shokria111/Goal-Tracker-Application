import ActiveGoals from "../../components/dashboard/DashActiveGoals";
import DashHeader from "../../components/dashboard/DashHeader";
import DashSummary from "../../components/dashboard/DashSummary";
import DashboardCompletedPreview from "../../components/dashboard/DashCompeletedPreview";
import { useGoals } from "../../context/GoalsContext";
import { Stack } from "@mui/material";

export default function Dashboard(){

const { goals, stats } = useGoals();

const activeGoals = goals.filter(g => g.status === "active");

const completedGoals = goals.filter(g => g.status === "completed");

const progressRate = goals.length
  ? Math.round((completedGoals.length / goals.length) * 100)  : 0;

const recentCompleted = completedGoals.slice(0, 3);

const xp = stats.xpTotal;
const streak = stats.streak;



  return(
    <Stack spacing={3}>
      <DashHeader/>
      <DashSummary 
        progressRate={progressRate}
        completedCount={completedGoals.length}
        streak={streak}
        xp = {xp}
      />
      <ActiveGoals goals={activeGoals} />
      <DashboardCompletedPreview goals={recentCompleted} completed={completedGoals.length} total={goals.length} />
    </Stack>
    
   
  )
  

}