import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './layout/layout'

import DashBoard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import NewGoal from "./pages/NewGoal";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import GoalDetails from "./pages/GoalDetials";

function App({ toggleMode }) {
  

  return (
    <Routes>
      <Route path='/' element={<Layout toggleMode={toggleMode}/>}>
        <Route index element={<DashBoard/>} />
        <Route  path="dashboard" element={<DashBoard/>} />
        <Route  path="goals" element={<Goals/>} />
        <Route  path="goals/new" element={<NewGoal/>} />
        <Route  path="goals/:id" element={<GoalDetails/>} />
        <Route  path="categories" element={<Categories/>} />
        <Route  path="settings" element={<Settings/>} />
        <Route  path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
