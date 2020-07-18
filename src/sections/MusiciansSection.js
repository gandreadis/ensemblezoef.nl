import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Section from './Section'

const MusiciansSection = ({ intl }) => (
  <Section id="musicians">
    <p>{intl.formatMessage({ id: 'musicians.text' })}</p>
  </Section>
)

export default injectIntl(MusiciansSection)
