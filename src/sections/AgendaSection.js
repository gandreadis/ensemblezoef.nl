import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import moment from 'moment'
import Markdown from 'react-remarkable'

import performances from '../data/performances.yaml'

import Section from './Section'

const AgendaSection = ({ intl }) => (
  <Section id="agenda">
    <p className="mb-3">{intl.formatMessage({ id: 'agenda.text' })}</p>
    <div>
      {performances
        .filter((p) => moment(p.date).isAfter(moment().subtract(1, 'days')))
        .map((p) => (
          <div className="row mb-2">
            <div className="col-12 col-sm-4 col-md-2 text-right">
              {moment(p.date).format('DD/MM/YYYY')}
              <br />
              {p.city}
            </div>
            <div className="col-12 col-sm-8 col-md-10 text-left">
              <h4>
                {intl.formatMessage({
                  id: `agenda.performances.${p.id}.location`,
                })}
              </h4>
              <Markdown>
                {intl.formatMessage({
                  id: `agenda.performances.${p.id}.description`,
                })}
              </Markdown>
            </div>
          </div>
        ))}
    </div>
  </Section>
)

export default injectIntl(AgendaSection)
