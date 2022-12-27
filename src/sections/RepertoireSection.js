import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Section from './Section'
import { FaYoutube, FaSpotify } from 'react-icons/fa'

import pieces from '../data/pieces.yaml'

const RepertoireItem = ({ piece, intl }) => (
  <div className="mb-2 text-left">
    <strong>{intl.formatMessage({ id: `pieces.${piece.id}.title` })}</strong>
    {' - '}
    {intl.formatMessage({ id: `pieces.${piece.id}.composer` })}
    {typeof piece.youtube === "string" && (
      <a href={piece.youtube} title="Link to a YouTube recording" className="text-white">
        <FaYoutube className="ms-1"/>
      </a>
    )}
    {Array.isArray(piece.spotify) && piece.spotify.map(s => (
      <a href={s} title="Link to a Spotify recording" className="text-white">
        <FaSpotify className="ms-1"/>
      </a>
    ))}
    {typeof piece.spotify === "string" && (
      <a href={piece.spotify} title="Link to a Spotify recording" className="text-white">
        <FaSpotify className="ms-1"/>
      </a>
    )}
    {intl.formatMessage({ id: `pieces.${piece.id}.arranger` }).indexOf('pieces') ===
      -1 && (
      <>
        <br />
        {`arr. ${intl.formatMessage({ id: `pieces.${piece.id}.arranger` })}`}
      </>
    )}
  </div>
)

const RepertoireSection = ({ intl }) => (
  <Section id="repertoire">
    <p className="pb-3">{intl.formatMessage({ id: 'repertoire.text' })}</p>
    <div className="row">
      <div className="col-12 col-md-6">
        {pieces.slice(0, Math.floor(pieces.length / 2) + 1).map(piece => <RepertoireItem key={piece.id} piece={piece} intl={intl} />)}
      </div>
      <div className="col-12 col-md-6">
        {pieces.slice(Math.floor(pieces.length / 2) + 1, pieces.length).map(piece => <RepertoireItem key={piece.id} piece={piece} intl={intl} />)}
      </div>
    </div>
    <h4 className="mt-4">Spotify Album</h4>
    <div className="text-center">
      <iframe src="https://open.spotify.com/embed/album/0b5iNmqC6WO4M26tjWf0e7" width="300" height="80" frameBorder="0"
              allowTransparency="true" allow="encrypted-media" title="ZOEF Spotify Album"/>
    </div>
  </Section>
)

export default injectIntl(RepertoireSection)
