import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import LandingPage from './Pages/LandingPage';
import ForgotPage from './Pages/ForgotPage';
import AfterResetPassword from './Pages/AfterResetPassword';

function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    /* If user is not signed in, redirects to login page */
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
          {/*link to each page*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/resetpassword" element={<AfterResetPassword />} />
          <Route path="/home" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
