import { Stack } from "@mui/material";
import { useState } from "react";
import GoalsFilters from "../../components/goalsPage/goalPageComponents/GoalsFIlters";
import GoalsList from "../../components/goalsPage/goalPageComponents/GoalsList";
import GoalsPageHeader from "../../components/goalsPage/goalPageComponents/GoalsPageHeader";
import StatCardsLoop from "../../components/goalsPage/goalPageComponents/StatCardsLoop";
import { useGoals } from "../../context/GoalsContext";
import { useMemo } from "react";

export default function Goals() {

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("createdAt");
  const [statusFilter, setStatusFilter] = useState("all");
  const { goals } = useGoals();
  console.log("goals from context:", goals);

  
  // Calculate the numbers for the stat cards
  const totalGoals = goals.length;
  const activeGoals = goals.filter(goal => goal.status === "active").length;
  const completedGoals = goals.filter(goal => goal.status === "completed").length;
  const pausedGoals = goals.filter(goal => goal.status === "paused").length;

  // sorting the goals based on the selected sort option
  const filteredGoals = useMemo(() => {
    let result = [...goals];
    //filter by tabs that we have in the status filter
    if (statusFilter !== "all") {
      result = result.filter(goal => goal.status === statusFilter);
    };
    //search by search bar
    if (searchTerm.trim()) {
      result = result.filter((goal) =>
        goal.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // search by dropdown and 
    if (sortOption === "createdAt") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOption === "dueDate") {
      result.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
    } else if (sortOption === "progress") {
      result.sort((a, b) => {
        const aValue = a.target ? a.progress / a.target : 0;
        const bValue = b.target ? b.progress / b.target : 0;
        return bValue - aValue;
      });
    } else if (sortOption === "title"){
      result.sort((a,b)=> a.title.localeCompare(b.title));
    }

  return result;
   
  }, [goals,statusFilter, searchTerm, sortOption]);

return (
  <Stack spacing={3}>
    <GoalsPageHeader />{/*the top part of the page with the title and the add new goal button*/}
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

    <GoalsList goals={filteredGoals}  /> {/*the list of goals that will be filtered and sorted based on the user's input*/}


  </Stack>
);
}