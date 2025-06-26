import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import PodcastPlayer from './components/Explore/Explore.jsx'
import PodcastEpisodes from './components/Explore/Explore.jsx'
import UnderConstruction from './components/Workingstage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<UnderConstruction/>} />
            <Route path="/about" element={<UnderConstruction/>} />
            <Route path="/contact" element={<UnderConstruction/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
