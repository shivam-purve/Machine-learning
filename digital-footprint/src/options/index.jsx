import React from 'react'
import { createRoot } from 'react-dom/client'
import Popup from '../popup/popup.jsx'   // ✅ Correct relative path
import '../popup/popup.css'              // ✅ Correct CSS path

createRoot(document.getElementById('root')).render(<Popup />)
