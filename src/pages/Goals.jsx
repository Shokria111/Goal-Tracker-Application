import { useGoals } from "../context/GoalsContext";
export default function Goals() {
  const { goals, createGoal } = useGoals();

  const handleAddTestGoal = (id) =>{
    createGoal({
      id: Date.now().toString(),
      title: "New Goal",
      category: "Study",
      Type: '"daily"',
      progress: 0,
      status: 100,
      startDate: new Date().toDateString(),
      endDate: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      logs: [],
      
    });
  }

  return (
    <div>
      <h1>Goals</h1>
      <p>You have {goals.length} goals.</p>
      <button onClick={handleAddTestGoal}>Add Test Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>{goal.tit}</li>
        ))}
      </ul>

    </div>
  );
}