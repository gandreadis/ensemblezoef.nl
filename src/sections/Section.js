import React from 'react'

import { injectIntl } from 'gatsby-plugin-intl'

import { Container } from 'react-bootstrap'

const Section = ({ id, intl, children }) => (
  <div className="py-5 bg-primary" id={id}>
    <Container>
      <h2 className="text-center pb-2">
        {intl.formatMessage({ id: `${id}.title` })}
      </h2>
      {children}
    </Container>
  </div>
)

export default injectIntl(Section)
