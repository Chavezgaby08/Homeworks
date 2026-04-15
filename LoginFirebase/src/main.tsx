import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <TaskProvider>
    <App />
  </TaskProvider>
</AuthProvider>
)
