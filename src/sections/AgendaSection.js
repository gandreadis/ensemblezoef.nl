import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Section from './Section'

const AgendaSection = ({ intl }) => (
  <Section id="agenda">
    <p>{intl.formatMessage({ id: 'agenda.text' })}</p>
  </Section>
)

export default injectIntl(AgendaSection)
