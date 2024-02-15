import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import LandingPage from './Pages/LandingPage';

function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login/"/>
    }else {
      return children
    }
  }

  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
