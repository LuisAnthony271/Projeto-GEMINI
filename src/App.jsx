import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Introducing from './components/introducing/introducing'
import Footer from './components/footer/footer'
import Technologies from './components/tech/tech'
import Responsabilities from './components/responsabilities/rspn'
import Method from './components/Method/Method'
// import History from './components/Historygemini/Historygemini'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Introducing />
      <Method />
      <Technologies />
      {/* <History /> */}
      <Responsabilities/>
      <Footer />
    </>
  )
}

export default App
