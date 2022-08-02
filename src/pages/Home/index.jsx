import {
    Hero,
    ServiceSection,
    Testimonial,
    Benefits,
    AboutUs,
    Contact,
    Footer,
    NavbarSection
} from '../../components'


export const Home = () => {
    return (
        <>
            <NavbarSection />
            <Hero />
            <ServiceSection />
            <Testimonial />
            <Benefits />
            <AboutUs />
            <Contact />
            <Footer />
        </>
    )
}
