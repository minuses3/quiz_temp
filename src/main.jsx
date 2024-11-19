import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Setting from './page/Setting'
import Loading from './components/Loading'
import './index.css'

function Root() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/setting" element={<Setting/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
  </StrictMode>
  )
}

const container = document.getElementById('root')
container && createRoot(container).render(<Root/>)
