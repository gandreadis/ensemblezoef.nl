import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

import Section from './Section'

const Musician = ({ name, id, intl }) => (
  <div className="col-12 col-md-6 col-lg-4">
    <p>
      <em>{name}</em>
    </p>
    <p>{intl.formatMessage({ id: `musicians.gallery.occupations.${id}` })}</p>
  </div>
)

const MusiciansSection = ({ intl }) => (
  <Section id="musicians">
    <Markdown>{intl.formatMessage({ id: 'musicians.text' })}</Markdown>
    <h4 className="text-center mt-3">
      {intl.formatMessage({ id: 'musicians.gallery.title' })}
    </h4>
    <div className="row">
      <Musician id="maud" name="Maud Busschers" intl={intl} />
      <Musician id="stijn" name="Stijn Brinkman" intl={intl} />
      <Musician id="nina" name="Nina Zuure" intl={intl} />
      <Musician id="georgios" name="Georgios Andreadis" intl={intl} />
      <Musician id="liutauras" name="Liutauras Zilaitas" intl={intl} />
      <Musician id="orrin" name="Orrin van Leeuwen" intl={intl} />
      <Musician id="janneke" name="Janneke Stoute" intl={intl} />
    </div>
  </Section>
)

export default injectIntl(MusiciansSection)
