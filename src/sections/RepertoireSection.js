import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Section from './Section'

const RepertoireItem = ({ id, intl }) => (
  <div className="mb-2 text-left">
    <strong>{intl.formatMessage({ id: `pieces.${id}.title` })}</strong>
    {" - "}
    {intl.formatMessage({ id: `pieces.${id}.composer` })}
    {intl.formatMessage({ id: `pieces.${id}.arranger` }).indexOf('pieces') === -1 && (
      <>
        <br/>
        {`arr. ${intl.formatMessage({ id: `pieces.${id}.arranger` })}`}
      </>
    )}
  </div>
)

const RepertoireSection = ({ intl }) => (
  <Section id="repertoire">
    <p className="pb-4">{intl.formatMessage({ id: 'repertoire.text' })}</p>
    <div className="row">
      <div className="col-12 col-md-6">
        <RepertoireItem id="carnaval-saint-saens" intl={intl}/>
        <RepertoireItem id="cavatina-beethoven" intl={intl}/>
        <RepertoireItem id="oboe-violin-bach" intl={intl}/>
        <RepertoireItem id="cinema-paradiso-morricone" intl={intl}/>
        <RepertoireItem id="czardas-monti" intl={intl}/>
        <RepertoireItem id="dolce-riposo-handel" intl={intl}/>
        <RepertoireItem id="oboe-sonata-saint-saens" intl={intl}/>
        <RepertoireItem id="genug-bach" intl={intl}/>
        <RepertoireItem id="reve-faure" intl={intl}/>
        <RepertoireItem id="kol-nidrei-bruch" intl={intl}/>
      </div>
      <div className="col-12 col-md-6">
        <RepertoireItem id="meditation-suk" intl={intl}/>
        <RepertoireItem id="natzurka-accordzeam" intl={intl}/>
        <RepertoireItem id="nocturne-kachaturian" intl={intl}/>
        <RepertoireItem id="oblivion-piazzolla" intl={intl}/>
        <RepertoireItem id="pie-jesu-faure" intl={intl}/>
        <RepertoireItem id="plink-plank-plunk-anderson" intl={intl}/>
        <RepertoireItem id="studies-folksong-williams" intl={intl}/>
        <RepertoireItem id="waltzy-lockwood" intl={intl}/>
        <RepertoireItem id="laid-purcell" intl={intl}/>
      </div>
    </div>
  </Section>
)

export default injectIntl(RepertoireSection)
