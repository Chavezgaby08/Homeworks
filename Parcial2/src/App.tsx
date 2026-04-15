import './App.css'
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FileSystemPage from './pages/FileSystemPage';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route 
        path='/filesystem' 
        element={
          <PrivateRoute>
            <FileSystemPage />
          </PrivateRoute>
        } 
      />
    </Routes>
  )
}

export default App