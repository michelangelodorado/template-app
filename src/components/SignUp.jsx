import { useState } from 'react'
import './SignUp.css'

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
    <path d="M15.75 9A6.75 6.75 0 119 2.25a.75.75 0 000-1.5A8.25 8.25 0 1017.25 9a.75.75 0 00-1.5 0z" />
  </svg>
)

const SignUp = ({ onBack }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const clearError = () => { if (error) setError('') }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setError('')
    setIsLoading(true)

    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="signup-wrapper">
        <div className="signup-header">
          <h3 className="login-title">Account created</h3>
          <p className="login-subtitle">
            Your account has been created successfully. You can now sign in with your credentials.
          </p>
        </div>

        <div className="login-card">
          <div className="login-card-body">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={onBack}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="signup-wrapper">
      {/* Header */}
      <div className="signup-header">
        <h3 className="login-title">Create an account</h3>
        <p className="login-subtitle">
          Fill in the details below to create your account.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="login-error">
          <span className="login-error-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="none" stroke="#f94627" strokeWidth="1.5"/>
              <text x="10" y="14" textAnchor="middle" fill="#f94627" fontSize="12" fontWeight="600">!</text>
            </svg>
          </span>
          <span className="login-error-text">{error}</span>
        </div>
      )}

      {/* Card */}
      <div className={`login-card${error ? ' login-card-error' : ''}`}>
        <div className="login-card-body">
          <form onSubmit={handleSubmit} noValidate>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="signup-username">
                <span className="required-asterisk">*</span>Username
              </label>
              <input
                id="signup-username"
                className={`form-control${error ? ' is-invalid' : ''}`}
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); clearError() }}
                autoFocus
                autoComplete="off"
                disabled={isLoading}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="signup-email">
                <span className="required-asterisk">*</span>Email
              </label>
              <input
                id="signup-email"
                className={`form-control${error ? ' is-invalid' : ''}`}
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearError() }}
                autoComplete="off"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="signup-password">
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
                  id="signup-password"
                  className={`form-control${error ? ' is-invalid' : ''}`}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); clearError() }}
                  autoComplete="off"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="signup-confirm-password">
                <span className="required-asterisk">*</span>Confirm Password
              </label>
              <div className="password-field-wrapper">
                <button
                  type="button"
                  className="show-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex={-1}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
                <input
                  id="signup-confirm-password"
                  className={`form-control${error ? ' is-invalid' : ''}`}
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); clearError() }}
                  autoComplete="off"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="form-submit">
              {!isLoading ? (
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Sign Up
                </button>
              ) : (
                <button type="button" className="btn btn-primary btn-block btn-lg btn-spinner" disabled>
                  <SpinnerIcon />
                  Creating Account...
                </button>
              )}
            </div>

            {/* Back to login */}
            <p className="sign-up-text">
              Already have an account? <a
                href="#"
                className="link"
                onClick={(e) => { e.preventDefault(); onBack() }}
              >Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
