import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ intl }) => (
  <Layout
    pageInfo={{
      name: 'contact',
      title: intl.formatMessage({ id: 'contact.title' }),
    }}
  >
    <SEO title={intl.formatMessage({ id: 'contact.title' })} />
    <a href="mailto:ensemblezoef@gmail.com" className="text-white">ensemblezoef@gmail.com</a>
  </Layout>
)

export default injectIntl(NotFoundPage)
