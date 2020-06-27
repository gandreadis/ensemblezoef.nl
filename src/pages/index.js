import React from 'react'
import { Container } from 'react-bootstrap'
import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Index = ({ intl }) => (
  <Layout pageInfo={{ name: 'index' }}>
    <SEO title="Home" keywords={['zoef', 'ensemble']} />
    <Container>
      <div className="center-name">
        <h1 className="font-italic font-family-body">
          {intl.formatMessage({ id: 'generic.title' })}
        </h1>
        <p className="text-muted font-italic">{intl.formatMessage({ id: 'index.wip' })}</p>
      </div>
    </Container>
  </Layout>
)

export default injectIntl(Index)
