import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Section from './Section'

const RepertoireSection = ({ intl }) => (
  <Section id="repertoire">
    <p>{intl.formatMessage({ id: 'repertoire.text' })}</p>
  </Section>
)

export default injectIntl(RepertoireSection)
