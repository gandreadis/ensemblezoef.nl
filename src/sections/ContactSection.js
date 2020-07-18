import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import { FaEnvelope } from 'react-icons/fa'

import Section from './Section'

const ContactSection = ({ intl }) => (
  <Section id="contact">
    <p>{intl.formatMessage({ id: 'contact.text' })}</p>
    <a href="mailto:ensemblezoef@gmail.com" className="text-white">
      <FaEnvelope className="mr-1" />
      ensemblezoef@gmail.com
    </a>
  </Section>
)

export default injectIntl(ContactSection)
