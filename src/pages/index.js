import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactSection from '../sections/ContactSection'
import AboutSection from '../sections/AboutSection'
import MusiciansSection from '../sections/MusiciansSection'
import RepertoireSection from '../sections/RepertoireSection'
import AgendaSection from '../sections/AgendaSection'
import JumbotronSection from '../sections/JumbotronSection'
import ProjectsSection from '../sections/ProjectsSection'

const Index = () => (
  <Layout pageInfo={{ name: 'index' }}>
    <SEO
      title="Home"
      keywords={['zoef', 'ensemble', 'muziek', 'music']}
      description="Een creatief en creërend collectief"
    />
    <JumbotronSection/>
    <AboutSection/>
    <MusiciansSection/>
    <ProjectsSection/>
    <AgendaSection/>
    <RepertoireSection/>
    <ContactSection/>
  </Layout>
)

export default Index
