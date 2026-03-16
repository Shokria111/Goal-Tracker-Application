import { Outlet } from "react-router-dom";
import { useGoals } from "../../context/GoalsContext";


export default function Dashboard() {
  const { stats } = useGoals();

  return (
    
    <div>
      <h2>Dashboard</h2>
      <p>Completed Count: {stats.completedCount}</p>
      <Outlet />
    </div>
    
  );
}