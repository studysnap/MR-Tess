import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Layout from './Layout.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import QUIZTER from './components/TessEvents/QUIZTER.jsx'
import MATRIX_BREAKOUT from './components/TessEvents/MATRIX_BREAKOUT.jsx'
import PUZZLE_HUNT from './components/TessEvents/PUZZLE_HUNT.jsx'
import ENIGMA from './components/TessEvents/ENIGMA.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Navigation/>,
      },
      {
        path : "quizter",
        element : <QUIZTER/>
      },
      {
        path : "matrix_breakout",
        element : <MATRIX_BREAKOUT/>
      },
      {
        path : "puzzle_hunt",
        element : <PUZZLE_HUNT/>
      },
      {
        path : "enigma",
        element : <ENIGMA/>
      }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)