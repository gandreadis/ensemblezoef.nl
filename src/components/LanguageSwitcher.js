import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from 'gatsby-plugin-intl'
import React, { Component } from 'react'
import { Dropdown, NavDropdown } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import enFlag from './flag-icons/en-flag.svg'
import nlFlag from './flag-icons/nl-flag.svg'

class LanguageSwitcher extends Component {
  getImageByCode(code) {
    return code === 'en' ? enFlag : nlFlag
  }

  renderLanguageChoice(code, label, currentLocale) {
    return (
      <NavDropdown.Item
        key={code}
        active={currentLocale === code}
        onClick={() => changeLocale(code)}
      >
        <img
          src={this.getImageByCode(code)}
          alt={label}
          className="me-2"
          width="30px"
        />
        {label}
      </NavDropdown.Item>
    )
  }

  render() {
    const languageNames = [
      { code: 'nl', label: 'Nederlands' },
      { code: 'en', label: 'English' },
    ]

    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) => (
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="language-dropdown"
              className="d-flex h-100 align-items-center"
            >
              <img
                src={this.getImageByCode(currentLocale)}
                alt="Language"
                width="30px"
              />
            </Dropdown.Toggle>
            <Helmet>
              <html lang={currentLocale} />
            </Helmet>
            <Dropdown.Menu>
              {languageNames.map((l) =>
                this.renderLanguageChoice(l.code, l.label, currentLocale)
              )}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)
