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
import { Container } from 'react-bootstrap'

const Foundation = () => (
  <Layout pageInfo={{ name: 'foundation' }} withoutNavbar={true}>
    <SEO
      title="Stichting Ensemble ZOEF - Informatie over de stichting"
      keywords={['zoef', 'ensemble', 'muziek', 'music']}
      description="Information about our foundation"
    />
    <Container>
        <h1 className="pt-5">Informatie over Stichting Ensemble ZOEF</h1>
        <h2>Doelstelling</h2>
        <p>De stichting heeft ten doel op maat gemaakte muzikale voorstellingen te creëren voor verschillende
            doelgroepen met name in samenwerking met sociaal-maatschappelijke initiatieven en het bevorderen van de
            creatieve ontwikkeling van zowel de leden als het publiek en het verrichten van al hetgeen met het
            vorenstaande verband houdt of daartoe bevorderlijk kan zijn.</p>
        <h2>Bestuur</h2>
        <p>
            Huidige bestuurders van Stichting Ensemble ZOEF zijn: Anne Zuure (voorzitter), Laura Joncker (penningmeester) en Sophie Dinglinger (secretaris).
        </p>
        <p>
            <em>Beloningsbeleid:</em> De bestuurders van de stichting vervullen hun functie vrijwillig en worden niet beloond.
        </p>
        <h2>Documenten</h2>
        <p><a href="/foundation/Beleidsplan_Stichting_Ensemble_ZOEF_-_2023-2025.pdf">Klik hier</a> voor het beleidsplan van 2023-2025 van onze stichting, inclusief een verslag van eerdere activiteiten.</p>
        <p>Jaarrekeningen/jaarverslagen van onze stichting:</p>
        <ol>
            <li><a href="/foundation/Jaarrekening_ZOEF_2022.pdf">Voor het jaar 2022</a></li>
            <li><a href="/foundation/Jaarverslag_ZOEF_2023.pdf">Voor het jaar 2023</a></li>
            <li><a href="/foundation/Jaarverslag_ZOEF_2024.pdf">Voor het jaar 2024</a></li>
        </ol>
        <p className="pt-3">
            <em><a href="/">Klik hier om terug te gaan naar de hoofdpagina</a></em>
        </p>
    </Container>
  </Layout>
)

export default Foundation
