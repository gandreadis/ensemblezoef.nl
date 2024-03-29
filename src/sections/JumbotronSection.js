import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'

import { FaYoutube, FaInstagram, FaFacebook, FaSpotify } from 'react-icons/fa'

const JumbotronSection = ({ intl }) => (
  <div className="jumbotron-container-container">
    <div className="blur-container">
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
            className="me-2 text-white"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.facebook.com/ensemblezoef/"
            target="_blank"
            rel="noreferrer"
            className="me-2 text-white"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://open.spotify.com/artist/4od9U5zd73pNVX44jiogK7?si=BzzXd-FaR_epgzBO4IPPUg"
            target="_blank"
            rel="noreferrer"
            className="me-2 text-white"
          >
            <FaSpotify size={32} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-Jw2XCI6tugO3A1KXQ_AxQ"
            target="_blank"
            rel="noreferrer"
            className="me-2 text-white"
          >
            <FaYoutube size={32} />
          </a>
        </p>
        <p>
          <img src="/ANBI_zk_diap.png" alt="ANBI" className="mt-3" style={{ "width": 100 }} />
        </p>

        <link rel="stylesheet" type="text/css" href="https://donorbox.org/animate-popup-donate-button.css" />
        <script type="text/javascript" defer="" src="https://donorbox.org/install-popup-button.js"
                id="donorbox-popup-button-installer"
                data-href="https://donorbox.org/website-donation-form-69?default_interval=o"
                data-style="background: rgb(245, 171, 10); color: rgb(255, 255, 255); text-decoration: none; font-family: Verdana, sans-serif; display: flex; font-size: 16px; padding: 12px 24px; border-radius: 8px; gap: 8px; width: fit-content; line-height: 24px; position: fixed; top: 50%; transform: translate(0px, 0px) rotate(-90deg); z-index: 9999; overflow: hidden; right: -41px;"
                data-img-src="https://donorbox.org/images/white_logo.svg"></script>
      </motion.div>
    </Container>
    </div>
  </div>
)

export default injectIntl(JumbotronSection)
