import { Stack } from "@mui/material";
import { useState } from "react";
import GoalsFilters from "../../components/goalsPage/goalPageComponents/GoalsFIlters";
import GoalsList from "../../components/goalsPage/goalPageComponents/GoalsList";
import GoalsPageHeader from "../../components/goalsPage/goalPageComponents/GoalsPageHeader";
import StatCardsLoop from "../../components/goalsPage/goalPageComponents/StatCardsLoop";
import { useGoals } from "../../context/GoalsContext";
import { Outlet } from "react-router-dom";



export default function Goals() {

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("createdAt");
  const [statusFilter, setStatusFilter] = useState("all");
  const {goals} = useGoals();

  const totalGoals = goals.length;
  const activeGoals = goals.filter(goal => goal.status === "active").length;
  const completedGoals = goals.filter(goal => goal.status === "completed").length;
  const pausedGoals = goals.filter(goal => goal.status === "paused").length;
  return (
    <Stack spacing={3}>
      <GoalsPageHeader  />{/*the top part of the page with the title and the add new goal button*/}
      <StatCardsLoop 
        totalGoals={totalGoals} 
        activeGoals={activeGoals} 
        completedGoals={completedGoals} 
        pausedGoals={pausedGoals} /> {/*the cards that show the number of goals in each status*/}

      <GoalsFilters  //the filters and sorting component
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
        
      <GoalsList  goals={goals}/> {/*the list of goals that will be filtered and sorted based on the user's input*/}
       
      
    </Stack>
  );
}