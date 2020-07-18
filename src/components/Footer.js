import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'

const Footer = ({ intl }) => (
  <Container>
    <footer className="text-white-50 pt-3 pb-1">
      <p>Copyright &copy; {new Date().getFullYear()} ZOEF</p>
    </footer>
  </Container>
)

export default injectIntl(Footer)
