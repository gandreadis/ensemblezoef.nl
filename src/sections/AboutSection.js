import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

import Section from './Section'

const AboutSection = ({ intl }) => (
  <Section id="about">
    <div className="font-size-large">
      <Markdown>{intl.formatMessage({ id: 'about.text' })}</Markdown>
    </div>
  </Section>
)

export default injectIntl(AboutSection)
