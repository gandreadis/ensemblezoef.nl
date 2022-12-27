import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import { Col, Row } from 'react-bootstrap'
import Markdown from 'react-remarkable'

import Section from './Section'

const AboutSection = ({ intl }) => (
  <Section id="about">
    <Row className="justify-content-center pb-3">
      <Col className="col-lg-6">
      <iframe src="https://www.youtube-nocookie.com/embed/Mmp0Pew_ToA"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
      </Col>
    </Row>
    <div className="font-size-large">
      <Markdown>{intl.formatMessage({ id: 'about.text' })}</Markdown>
    </div>
  </Section>
)

export default injectIntl(AboutSection)
