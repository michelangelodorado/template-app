import { useState } from 'react'
import './LoginForm.css'

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const SpinnerIcon = () => (
  <svg className="spinner-svg" width="18" height="18" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.75 9A6.75 6.75 0 119 2.25a.75.75 0 000-1.5A8.25 8.25 0 1017.25 9a.75.75 0 00-1.5 0z"
    />
  </svg>
)

const LoginForm = ({ tenantName = 'f5-asean' }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }

    setError('')
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      setError('Invalid username or password.')
    }, 2000)
  }

  return (
    <div className="login-form-wrapper">
      {/* Header */}
      <div className="login-form-header">
        <h3 className="login-title">{tenantName}</h3>
        <p className="login-subtitle">
          Please enter your email address and password to log in.
        </p>
      </div>

      {/* Card */}
      <div className="login-card">
        <div className="login-card-body">
          {error && (
            <div className="login-error">
              <span className="login-error-icon">!</span>
              <span className="login-error-text">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="username">
                <span className="required-asterisk">*</span>Email
              </label>
              <input
                id="username"
                className="form-control"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                autoComplete="off"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                <span className="required-asterisk">*</span>Password
              </label>
              <div className="password-field-wrapper">
                <button
                  type="button"
                  className="show-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
                <input
                  id="password"
                  className="form-control"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Forgot password */}
            <div className="forgot-password">
              <a href="#" className="link">
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <div className="form-submit">
              {!isLoading ? (
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Sign In
                </button>
              ) : (
                <button type="button" className="btn btn-primary btn-block btn-lg btn-spinner" disabled>
                  <SpinnerIcon />
                  Signing In...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
