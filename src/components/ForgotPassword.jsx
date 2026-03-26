import { useState } from 'react'
import './ForgotPassword.css'

const SpinnerIcon = () => (
  <svg className="spinner-svg" width="18" height="18" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 9A6.75 6.75 0 119 2.25a.75.75 0 000-1.5A8.25 8.25 0 1017.25 9a.75.75 0 00-1.5 0z" />
  </svg>
)

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setError('Please enter your email address.')
      return
    }

    setError('')
    setIsLoading(true)

    // Simulate submit
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="forgot-password-wrapper">
        <div className="forgot-password-header">
          <h3 className="login-title">Check your email</h3>
          <p className="login-subtitle">
            If the email address you entered is associated with an account, you will receive a link to reset your password.
          </p>
        </div>

        <div className="login-card">
          <div className="login-card-body">
            <div className="form-actions-row">
              <div className="form-action-col">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn-block"
                  onClick={onBack}
                >
                  Back to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="forgot-password-wrapper">
      {/* Header */}
      <div className="forgot-password-header">
        <h3 className="login-title">Forgot your password?</h3>
        <p className="login-subtitle">
          Please enter your email and we will help you recover your password.
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
            <div className="form-group login-form-input">
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

            <div className="form-actions-row">
              <div className="form-action-col">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn-block"
                  onClick={onBack}
                  disabled={isLoading}
                >
                  Back
                </button>
              </div>
              <div className="form-action-col">
                {!isLoading ? (
                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    Submit
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary btn-lg btn-block btn-spinner" disabled>
                    <SpinnerIcon />
                    Submitting...
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Support link */}
<div className="support-link">
  Contact support for additional assistance
</div>
    </div>
  )
}

export default ForgotPassword
