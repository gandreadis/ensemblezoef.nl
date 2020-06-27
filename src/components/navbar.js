import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import LanguageSwitcher from './language'
import * as PropTypes from 'prop-types'

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { transparent: true }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', () => {
      this.checkScrollState()
    })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.listener)
  }

  checkScrollState() {
    const scrolled = document.scrollingElement.scrollTop
    if (scrolled >= 120) {
      if (this.state.transparent) {
        this.setState({ transparent: false })
      }
    } else {
      if (!this.state.transparent) {
        this.setState({ transparent: true })
      }
    }
  }

  render() {
    let { pageInfo, intl } = this.props

    return (
      <>
        <Navbar
          bg={
            this.state.transparent && pageInfo.name === 'index'
              ? 'transparent'
              : 'secondary'
          }
          expand="md"
          id="site-navbar"
          fixed="top"
        >
          <Container>
            <Link
              to="/"
              style={{
                opacity:
                  this.state.transparent && pageInfo.name === 'index' ? 0 : 1,
              }}
            >
              <Navbar.Brand
                as="span"
                className="text-light font-italic"
              >
                {intl.formatMessage({ id: 'generic.title' })}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" activeKey={pageInfo && pageInfo.name}>
                <Nav.Link
                  href="/contact"
                  className={'mr-2 ' + (this.state.transparent && pageInfo.name === 'index' ? "text-dark" : "text-white")}
                >
                  {intl.formatMessage({ id: 'nav.contact' })}
                </Nav.Link>
                <LanguageSwitcher />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

CustomNavbar.propTypes = {
  pageInfo: PropTypes.any,
  intl: PropTypes.any,
}

export default injectIntl(CustomNavbar)
