import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import './App.css'
import { ScrollToTop } from './components/pages/scrollToTop'
import Home from './components/pages/home'
import AboutPage from './components/pages/about-gemini'
import LearnPage from './components/pages/learn-gemini'
import AssistentGemini from './components/pages/assistent-gemini'
import IntegrateGemini from './components/pages/integrate-gemini'
import CreateContentGemini from './components/pages/createContent-gemini'
import GemmaGemini from './components/pages/gemma-gemini'
import ImagenPage from './components/pages/imagen-gemini'
import VeoPage from './components/pages/Veo-gemini'
import ProjetoAstra from './components/pages/projetoAstra-gemini'
import ProjetoMariner from './components/pages/projetoMariner-gemini'
import Gemini25 from './components/pages/gemini25-gemini'
import GeminiLive from './components/pages/geminiLive-gemini'
import FuturoIA from './components/pages/futuroIA-gemini'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Learn' element={<LearnPage />} />
            <Route path='/Assistente' element={<AssistentGemini />} />
            <Route path='/Integrate' element={<IntegrateGemini />} />
            <Route path='/Create' element={<CreateContentGemini />} />
            <Route path='/Gemma' element={<GemmaGemini />} />
            <Route path='/Imagen' element={<ImagenPage />} />
            <Route path='/Veo' element={<VeoPage />} />
            <Route path='/ProjetoAstra' element={<ProjetoAstra/>} />
            <Route path='/ProjetoMariner' element={<ProjetoMariner/>} />
            <Route path='/Gemini2.5' element={<Gemini25/>} />
            <Route path='/GeminiLive' element={<GeminiLive/>} />
            <Route path='/futuroIA' element={<FuturoIA />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
