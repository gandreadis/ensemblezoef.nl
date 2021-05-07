import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Container } from 'react-bootstrap'

import Navbar from './CustomNavbar'

import '../styles/style.scss'
import { Helmet } from 'react-helmet'
import Footer from './Footer'

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#f07f03" />
          <script type='text/javascript' dangerouslySetInnerHTML={{
    __html: `
      console.log("test");
      if (window.location.hostname == "zoefensemble.nl") {
              window.location.replace("https://ensemblzoef.nl");
            }
    `,
  }}/>

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,700&display=swap"
            rel="stylesheet"
          />

          <html className="is-fullheight bg-primary" lang="nl" />
          <body className="is-fullheight" />
        </Helmet>
        <Navbar pageInfo={pageInfo} />
        {pageInfo.title ? (
          <div className="is-fullheight main-content text-center text-white bg-primary">
            <main>
              <Container className="mt-5">
                <h1 className="mt-3">{pageInfo.title}</h1>
                {children}
              </Container>
            </main>
            <div className="flex-shrink-0">
              <Footer />
            </div>
          </div>
        ) : (
          <div className="is-fullheight text-center text-white bg-primary">
            {children}
            <Footer />
          </div>
        )}
      </>
    )}
  />
)

export default Layout
