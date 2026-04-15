import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TaskPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <TasksPage />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
