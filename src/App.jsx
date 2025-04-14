import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import './App.css'
import Home from './components/pages/home'
import AboutPage from './components/pages/about-gemini'
import LearnPage from './components/pages/learn-gemini'
import AssistentGemini from './components/pages/assistent-gemini'
import IntegrateGemini from './components/pages/integrate-gemini'
import CreateContentGemini from './components/pages/createContent-gemini'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Learn' element={<LearnPage />} />
          <Route path='/Assistente' element={<AssistentGemini />} />
          <Route path='/Integrate' element={<IntegrateGemini />} />
          <Route path='/Create' element={<CreateContentGemini />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
