import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'

import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'

const JumbotronSection = ({ intl }) => (
  <Container className="jumbotron-container">
    <motion.div
      className="center-name"
      animate={{ left: '50%' }}
      transition={{ delay: 0.5 }}
    >
      <h1 className="font-italic font-family-body">
        {intl.formatMessage({ id: 'generic.title' })}
      </h1>
      <p className="lead mb-3">
        {intl.formatMessage({ id: 'generic.slogan' })}
      </p>
      <p>
        <a
          href="https://www.instagram.com/ensemblezoef/"
          target="_blank"
          rel="noreferrer"
          className="mr-2 text-white"
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.facebook.com/ensemblezoef/"
          target="_blank"
          rel="noreferrer"
          className="mr-2 text-white"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC-Jw2XCI6tugO3A1KXQ_AxQ"
          target="_blank"
          rel="noreferrer"
          className="mr-2 text-white"
        >
          <FaYoutube size={32} />
        </a>
      </p>
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
