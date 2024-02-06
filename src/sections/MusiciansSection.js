import React, { useState } from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

import Section from './Section'

const Musician = ({ name, id, intl }) => {
  const [isAlternative, setIsAlternative] = useState(false)

  return (
    <div className="col-12 col-md-6">
      <div className="row">
        <div className="col-6 p-3">
          <img
            className="img-fluid rounded-circle musician-portrait"
            src={`/portraits/${id}${isAlternative ? '-alternative' : ''}.jpg`}
            alt={name}
            onMouseEnter={() => setIsAlternative(true)}
            onMouseLeave={() => setIsAlternative(false)}
            onTouchStart={() => setIsAlternative(!isAlternative)}
          />
        </div>
        <div className="col-6 text-left d-flex align-items-center">
          <div>
            <h5>{name}</h5>
            <p>
              {intl.formatMessage({
                id: `musicians.gallery.occupations.${id}`,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MusiciansSection = ({ intl }) => (
  <Section id="musicians">
    <div className="row justify-content-center">
      <div className="col-6 p-3">
        <img src="https://ensemblezoef.nl/zoef-interactie.jpg" className="img-fluid" alt="ZOEF in actie"/>
      </div>
    </div>

    <h3>{intl.formatMessage({ id: 'musicians.heading-current' })}</h3>
    <p className="mb-3">
      Nina Zuure, Stijn Brinkman, Maud Busschers, Annemarie Hensens, Falou Lansink, Benjamin de Boer & Nick Verschoor
    </p>
    <h3>{intl.formatMessage({ id: 'musicians.heading-founding' })}</h3>
    <div className="row mt-4">
      <Musician id="maud" name="Maud Busschers" intl={intl} />
      <Musician id="cecilia" name="Cecilia van Berkum" intl={intl} />
      <Musician id="stijn" name="Stijn Brinkman" intl={intl} />
      <Musician id="nina" name="Nina Zuure" intl={intl} />
      <Musician id="georgios" name="Georgios Andreadis" intl={intl} />
      <Musician id="liutauras" name="Liutauras Žilaitis" intl={intl} />
      <Musician id="orrin" name="Orrin van Leeuwen" intl={intl} />
      <Musician id="janneke" name="Janneke Stoute" intl={intl} />
      <Markdown>{intl.formatMessage({ id: 'musicians.text' })}</Markdown>
    </div>
  </Section>
)

export default injectIntl(MusiciansSection)
