import { useState } from 'react'
import F5Logo from './components/F5Logo'
import LoginForm from './components/LoginForm'
import ForgotPassword from './components/ForgotPassword'
import PrivacyFooter from './components/PrivacyFooter'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('login')

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
                onForgotPassword={() => setCurrentView('forgot')}
              />
            )}
            {currentView === 'forgot' && (
              <ForgotPassword
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
