import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout/Layout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import UnderConstruction from './components/Workingstage.jsx'
import PodcastList from './components/Explore/Explore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/exploretest" element={<PodcastList/>} />
            <Route path="/explore" element={<PodcastList/>} />
            <Route path="/about" element={<UnderConstruction/>} />
            <Route path="/contact" element={<UnderConstruction/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
