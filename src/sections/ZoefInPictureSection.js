import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'
import { Col, Row } from 'react-bootstrap'
import Markdown from 'react-remarkable'

import Section from './Section'

const ZoefInPictureSection = ({ intl }) => (
    <Section id="zoef-in-picture">
        <h4>{intl.formatMessage({ id: 'zoef-in-picture.episode-1.title' })}</h4>
        <Row className="justify-content-center">
            <div className="col-lg-8">
                <Markdown>{intl.formatMessage({ id: 'zoef-in-picture.episode-1.text' })}</Markdown>
            </div>
        </Row>
        <Row className="justify-content-center pb-3">
            <Col className="col-lg-6">
                <iframe src="https://www.youtube-nocookie.com/embed/_A1_X5ieiCw"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen width={400} height={225} />
            </Col>
        </Row>
        <h4>{intl.formatMessage({ id: 'zoef-in-picture.episode-2.title' })}</h4>
        <Row className="justify-content-center">
            <div className="col-lg-8">
                <Markdown>{intl.formatMessage({ id: 'zoef-in-picture.episode-2.text' })}</Markdown>
            </div>
        </Row>
        <Row className="justify-content-center pb-3">
            <Col className="col-lg-6">
                <iframe src="https://www.youtube-nocookie.com/embed/xlDAf55NB9U"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen width={400} height={225} />
            </Col>
        </Row>
    </Section>
)

export default injectIntl(ZoefInPictureSection)
