import React from 'react'

import { injectIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Button } from 'react-bootstrap'

const NotFoundPage = ({ intl }) => (
  <Layout
    pageInfo={{
      name: '404',
      title: intl.formatMessage({ id: 'not-found.title' }),
    }}
  >
    <SEO title={intl.formatMessage({ id: 'not-found.title' })} />
    <p className="lead">{intl.formatMessage({ id: 'not-found.subtitle' })}</p>
    <Link to="/">
      <Button variant="secondary">
        {intl.formatMessage({ id: 'not-found.action' })}
      </Button>
    </Link>
  </Layout>
)

export default injectIntl(NotFoundPage)
