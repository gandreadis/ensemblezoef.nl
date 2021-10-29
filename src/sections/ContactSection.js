import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'
import Markdown from 'react-remarkable'

import Section from './Section'

const ContactSection = ({ intl }) => (
  <Section id="contact">
    <p className="mb-3">{intl.formatMessage({ id: 'contact.text' })}</p>
    <a
      href="mailto:ensemblezoef@gmail.com"
      className="mr-2 btn btn-light text-primary"
    >
      <FaEnvelope size={28} className="mr-2" />
      Email
    </a>
    <a
      href="https://www.instagram.com/ensemblezoef/"
      target="_blank"
      rel="noreferrer"
      className="mr-md-2 btn btn-light text-primary"
    >
      <FaInstagram size={28} className="mr-2" />
      Instagram
    </a>
    <br className="d-block d-md-none" />
    <a
      href="https://www.facebook.com/ensemblezoef/"
      target="_blank"
      rel="noreferrer"
      className="mr-2 mt-2 mt-md-0 btn btn-light text-primary"
    >
      <FaFacebook size={28} className="mr-2" />
      Facebook
    </a>
    <a
      href="https://open.spotify.com/artist/4od9U5zd73pNVX44jiogK7?si=BzzXd-FaR_epgzBO4IPPUg"
      target="_blank"
      rel="noreferrer"
      className="mr-md-2 mt-2 mt-md-0 btn btn-light text-primary"
    >
      <FaSpotify size={28} className="mr-2" />
      Spotify
    </a>
    <a
      href="https://www.youtube.com/channel/UC-Jw2XCI6tugO3A1KXQ_AxQ"
      target="_blank"
      rel="noreferrer"
      className="mr-md-2 mt-2 mt-md-0 btn btn-light text-primary"
    >
      <FaYoutube size={28} className="mr-2" />
      YouTube
    </a>
    <p className="mt-3">
      <Markdown>{intl.formatMessage({ id: 'contact.telephone' })}</Markdown>
    </p>
  </Section>
)

export default injectIntl(ContactSection)
