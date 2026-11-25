import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AssistanceForm from './components/AssistanceForm'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import WhyTorq from './components/WhyTorq'
import LocationSection from './components/LocationSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AssistanceForm />
        <ProblemSection />
        <HowItWorks />
        <Services />
        <WhyTorq />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App