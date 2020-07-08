import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const Footer = ({ intl }) => (
  <footer className="text-white-50 pt-3 pb-1">
    <p>Copyright &copy; {new Date().getFullYear()} ZOEF</p>
  </footer>
)

export default injectIntl(Footer)
