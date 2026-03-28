import { useState } from 'react'
import F5Logo from './components/F5Logo'
import LoginForm from './components/LoginForm'
import ForgotPassword from './components/ForgotPassword'
import SignUp from './components/SignUp'
import PrivacyFooter from './components/PrivacyFooter'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('login')
  const [currentUser, setCurrentUser] = useState(null)

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData)
    setCurrentView('home')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setCurrentView('login')
  }

  // Home page is full-screen — rendered outside the kc-container
  if (currentView === 'home') {
    return <HomePage user={currentUser} onLogout={handleLogout} />
  }

  return (
    <div className="kc-container">
      <div className="page-container">
        <div className="login-page-container">
          <div className="login-page-inner">
            {/* Logo */}
            <div className="logo-area">
              <F5Logo size={48} />
            </div>

            {/* Views */}
            {currentView === 'login' && (
              <LoginForm
                tenantName="F5 Application"
                onLoginSuccess={handleLoginSuccess}
                onForgotPassword={() => setCurrentView('forgot')}
                onSignUp={() => setCurrentView('signup')}
              />
            )}
            {currentView === 'forgot' && (
              <ForgotPassword
                onBack={() => setCurrentView('login')}
              />
            )}
            {currentView === 'signup' && (
              <SignUp
                onBack={() => setCurrentView('login')}
              />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <PrivacyFooter />
    </div>
  )
}

export default App
