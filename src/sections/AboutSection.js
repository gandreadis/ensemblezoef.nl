import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Section from './Section'

const AboutSection = ({ intl }) => (
  <Section id="about">
    <p className="font-size-large">{intl.formatMessage({ id: 'about.text' })}</p>
  </Section>
)

export default injectIntl(AboutSection)
