
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import HowItWorks from './Components/HowItWorks'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
