import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Scrollspy from 'react-scrollspy'

import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import LanguageSwitcher from './LanguageSwitcher'
import * as PropTypes from 'prop-types'

import zoefImage from './zoef-white.png'

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { transparent: true }
  }

  componentDidMount() {
    this.checkScrollState()
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

    const NavContainer = ({ children }) => (
      <Nav className="ml-auto">{children}</Nav>
    )

    const navItems = ['about', 'musicians', 'projects-overview', 'agenda', 'repertoire', 'contact']

    return (
      <>
        <Navbar
          bg={
            this.state.transparent && pageInfo.name === 'index'
              ? 'transparent'
              : 'primary'
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
              <Navbar.Brand>
                <img
                  src={zoefImage}
                  height="30"
                  className="d-inline-block align-top"
                  alt="ZOEF"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Scrollspy
                items={navItems}
                currentClassName="font-family-header"
                componentTag={NavContainer}
              >
                <Nav.Link href="#about" className="mr-2 text-white">
                  {intl.formatMessage({ id: 'about.title' })}
                </Nav.Link>
                <Nav.Link href="#musicians" className="mr-2 text-white">
                  {intl.formatMessage({ id: 'musicians.title' })}
                </Nav.Link>
                <Nav.Link href="#projects-overview" className="mr-2 text-white">
                  {intl.formatMessage({ id: 'projects-overview.title' })}
                </Nav.Link>
                <Nav.Link href="#agenda" className="mr-2 text-white">
                  {intl.formatMessage({ id: 'agenda.title' })}
                </Nav.Link>
                <Nav.Link href="#repertoire" className="mr-2 text-white">
                  {intl.formatMessage({ id: 'repertoire.title' })}
                </Nav.Link>
                <Nav.Link href="#contact" className="mr-2 text-white">
                  {intl.formatMessage({ id: 'contact.title' })}
                </Nav.Link>
                <LanguageSwitcher />
              </Scrollspy>
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
