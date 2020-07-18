import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'

const JumbotronSection = ({ intl }) => (
  <Container className="h-100">
    <motion.div
      className="center-name"
      animate={{ left: '50%' }}
      transition={{ delay: 1 }}
    >
      <h1 className="font-italic font-family-body">
        {intl.formatMessage({ id: 'generic.title' })}
      </h1>
      <p className="lead">{intl.formatMessage({ id: 'generic.slogan' })}</p>
    </motion.div>
    <img
      className="cultuurfonds-icon"
      src="/cultuurfonds-logo.png"
      alt={intl.formatMessage({ id: 'jumbotron.cultuurfonds' })}
      width={150}
    />
  </Container>
)

export default injectIntl(JumbotronSection)
