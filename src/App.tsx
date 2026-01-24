import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Nature from './pages/Nature'
import Places from './pages/Places'
import Culture from './pages/Culture'
import Visit from './pages/Visit'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="priroda" element={<Nature />} />
          <Route path="mesta" element={<Places />} />
          <Route path="kultura" element={<Culture />} />
          <Route path="posetit" element={<Visit />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
