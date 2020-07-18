import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactSection from '../sections/ContactSection'
import AboutSection from '../sections/AboutSection'
import MusiciansSection from '../sections/MusiciansSection'
import RepertoireSection from '../sections/RepertoireSection'
import AgendaSection from '../sections/AgendaSection'
import JumbotronSection from '../sections/JumbotronSection'

const Index = () => (
  <Layout pageInfo={{ name: 'index' }}>
    <SEO title="Home" keywords={['zoef', 'ensemble']} />
    <JumbotronSection/>
    <AboutSection />
    <MusiciansSection />
    <RepertoireSection />
    <AgendaSection />
    <ContactSection />
  </Layout>
)

export default Index
