import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const Footer = ({ intl }) => (
  <footer className="text-muted pt-3 pb-1">
    <p>Copyright &copy; {new Date().getFullYear()} ZOEF</p>
  </footer>
)

export default injectIntl(Footer)
