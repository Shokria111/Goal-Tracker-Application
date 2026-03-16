import { createContext, useContext, useReducer, useEffect } from "react";

export const GoalsContext = createContext();

const initialState = {
  goals: [],
  stats: {
    xpTotal: 0,
    streak: 0,
    completedCount: 0,
  },
};

function goalsReducer(state, action) {
  switch (action.type) {

    case "CREATE_GOAL": {
      const updatedGoals = [...state.goals, action.payload];
      return {
        ...state,
        goals: updatedGoals,
        stats: {
          ...state.stats,
          completedCount: updatedGoals.filter((goal) => goal.status === "completed").length,
        }
      };
    }
    case "UPDATE_GOAL":{
      const updatedGoals = state.goals.map((goal) =>
        goal.id === action.payload.id ? action.payload : goal
      );
      return {
        ...state,
        goals: updatedGoals,
        stats: {
          ...state.stats,
          completedCount: updatedGoals.filter((goal) => goal.status === "completed").length,
        }
      };
    }
    case "DELETE_GOAL":{
      const updatedGoals = state.goals.filter((goal) => goal.id !== action.payload);
       return {
        ...state,
        goals: updatedGoals,
        stats: {
          ...state.stats,
          completedCount: updatedGoals.filter((goal) => goal.status === "completed").length,
        }
      };
    }
    case "TOGGLE_PAUSE":{
      const updatedGoals = state.goals.map((goal) =>
        goal.id === action.payload
          ? {
              ...goal,
              status: goal.status === "paused" ? "active" : "paused",
            }
          : goal
      );

      return {
        ...state,
        goals: updatedGoals,
        stats: {
          ...state.stats,
          completedCount: updatedGoals.filter((goal) => goal.status === "completed").length,
        }
      };
      };

    case "MARK_COMPLETE": {
      const updatedGoals = state.goals.map((goal) =>
        goal.id === action.payload
          ? { ...goal, status: "completed", progress: goal.target }
          : goal
      );

      return {
        ...state,
        goals: updatedGoals,
        stats: {
          ...state.stats,
          completedCount: updatedGoals.filter(
            (goal) => goal.status === "completed"
          ).length,
        },
      };
    }
    case "LOAD_GOALS":
      return {
        ...state,
        goals: action.payload.goals,
        stats: action.payload.stats,
      };

    default:
      return state;
  }
}

export function GoalsProvider({ children }) {
  const [state, dispatch] = useReducer(goalsReducer, initialState);

  // Load from localStorage when app starts
  useEffect(() => {
    const savedGoals = localStorage.getItem("goals");
    const savedStats = localStorage.getItem("stats");

     try {
      dispatch({
        type: "LOAD_GOALS",
        payload: {
          goals: savedGoals ? JSON.parse(savedGoals) : [],
          stats: savedStats ?
             JSON.parse(savedStats)
            : {
                xpTotal: 0,
                streak: 0,
                completedCount: 0,
              },
        },
      });
    } catch (error) {
      console.error("Failed to load goals from localStorage:", error);
    }
  }, []);

  // Save to localStorage when state changes 
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(state.goals));
    localStorage.setItem("stats", JSON.stringify(state.stats));
  }, [state.goals, state.stats]);

  const createGoal = (goal) => {
    dispatch({ type: "CREATE_GOAL", payload: goal });
  };

  const updateGoal = (goal) => {
    dispatch({ type: "UPDATE_GOAL", payload: goal });
  };

  const deleteGoal = (id) => {
    dispatch({ type: "DELETE_GOAL", payload: id });
  };

  const togglePause = (id) => {
    dispatch({ type: "TOGGLE_PAUSE", payload: id });
  };

  const markComplete = (id) => {
    dispatch({ type: "MARK_COMPLETE", payload: id });
  };


  return (
    <GoalsContext.Provider
      value={{
        goals: state.goals,
        stats: state.stats,
        createGoal,
        updateGoal,
        deleteGoal,
        togglePause,
        markComplete,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

export function useGoals() {
  return useContext(GoalsContext);
}