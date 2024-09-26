import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import TaskView from "./views/TaskView"
import AnalysisView from "./views/AnalysisView"
import SettingView from "./views/SettingView"


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"/tasks"}>Tasks</Link></li>
          <li><Link to={"/analysis"}>Analysis</Link></li>
          <li><Link to={"/settings"}>Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tasks" element={<TaskView />} />
        <Route path="/analysis" element={<AnalysisView />} />
        <Route path="/settings" element={<SettingView />} />
      </Routes>
    </div>
  )
}


export default App
