import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import { Col, Row } from 'react-bootstrap'
import Markdown from 'react-remarkable'

import Section from './Section'

const AboutSection = ({ intl }) => (
  <Section id="about">
    <Row className="justify-content-center pb-3">
      <Col md={8} sm={12}>
        <img src="/zoef-group.jpg" alt="Ensemble ZOEF" className="img-fluid" />
      </Col>
    </Row>
    <div className="font-size-large">
      <Markdown>{intl.formatMessage({ id: 'about.text' })}</Markdown>
    </div>
  </Section>
)

export default injectIntl(AboutSection)
