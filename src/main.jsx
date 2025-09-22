import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import I18nLayout from "./I18nLayout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
            <I18nLayout/>
      </Suspense>
  </StrictMode>,
)
