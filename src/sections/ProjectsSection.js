import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

import projects from '../data/projects.yaml'

import Section from './Section'

const ProjectsSection = ({ intl }) => (
  <Section id="projects-overview">
    <p className="mb-3">{intl.formatMessage({ id: 'projects-overview.text' })}</p>
    <div>
      {projects.map((p) => (
        <div className="row mb-2">
          <div className="col-12 col-sm-4 col-md-2 text-right">
            {p.year}
          </div>
          <div className="col-12 col-sm-8 col-md-10 text-left">
            <h4>
              {intl.formatMessage({
                id: `projects.${p.id}.target-audience`,
              })}
            </h4>
            <Markdown>
              {intl.formatMessage({
                id: `projects.${p.id}.description`,
              })}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export default injectIntl(ProjectsSection)
