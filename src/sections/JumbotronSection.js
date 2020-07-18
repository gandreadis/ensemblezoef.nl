import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'

const JumbotronSection = ({ intl }) => (
  <Container className="h-100">
    <div className="center-name">
      <h1 className="font-italic font-family-body">
        {intl.formatMessage({ id: 'generic.title' })}
      </h1>
      <p className="lead">{intl.formatMessage({ id: 'generic.slogan' })}</p>
    </div>
    <img
      className="cultuurfonds-icon"
      src="/cultuurfonds-logo.png"
      alt={intl.formatMessage({ id: 'jumbotron.cultuurfonds' })}
      width={150}
    />
  </Container>
)

export default injectIntl(JumbotronSection)
