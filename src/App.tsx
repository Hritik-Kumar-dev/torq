import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <CTA />
      </main>
      <Footer />
    </>
  )
}