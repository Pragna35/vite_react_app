import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"

// import Name from './name.jsx'
// import Resume from './resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>

    {/* <Name/> */}
    {/* <Resume/> */}
  </StrictMode>,
)
