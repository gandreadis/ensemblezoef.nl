import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'
import zoefImage from './zoef-white.png'

const Footer = ({ intl }) => (
  <Container>
    <footer className="text-white-50 pt-3 pb-1">
      <img src={zoefImage} height="90" alt="ZOEF" className="mb-3" />

      <p>Stichting Ensemble ZOEF - KvK: 84775920 - IBAN: NL05 TRIO 0320 4351 80</p>
      <p>E-Mail: <a className="text-white-50" href="mailto:ensemblezoef@gmail.com">ensemblezoef@gmail.com</a> - Address: Bethaniestraat 28, 5211 LJ 's Hertogenbosch</p>
      <p><a className="text-white-50" href="/foundation">Klik hier</a> voor meer informatie over Stichting Ensemble ZOEF</p>

      <p>Copyright &copy; {new Date().getFullYear()} ZOEF</p>
    </footer>
  </Container>
)

export default injectIntl(Footer)
