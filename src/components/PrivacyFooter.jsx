import './PrivacyFooter.css'

const PrivacyFooter = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Policies', href: 'https://www.f5.com/company/policies' },
    { label: 'Trademarks', href: 'https://www.f5.com/company/policies/trademarks' },
    {
      label: 'F5 CA Privacy Summary',
      href: 'https://www.f5.com/company/policies/f5-california-privacy-summary',
    },
    {
      label: 'Do Not Sell My Personal Information',
      href: 'https://www.f5.com/company/policies/privacy-notice#no-sell',
    },
  ]

  return (
    <footer className="privacy-footer">
      <span className="copyright-text">
        &copy; {currentYear} F5, Inc. All Rights Reserved.
      </span>
      {links.map((link, i) => (
        <span key={link.label} className="footer-link-group">
          <span className="separator-dot" />
          <a
            className="privacy-link"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.label}
          </a>
        </span>
      ))}
    </footer>
  )
}

export default PrivacyFooter
