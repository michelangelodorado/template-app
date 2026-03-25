import F5Logo from './components/F5Logo'
import LoginForm from './components/LoginForm'
import PrivacyFooter from './components/PrivacyFooter'
import './App.css'

function App() {
  return (
    <div className="kc-container">
      <div className="page-container">
        <div className="login-page-container">
          <div className="login-page-inner">
            {/* Logo */}
            <div className="logo-area">
              <F5Logo size={48} />
            </div>

            {/* Login form */}
            <LoginForm tenantName="F5 Application" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <PrivacyFooter />
    </div>
  )
}

export default App
