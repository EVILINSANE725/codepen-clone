import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import { router } from './Routes'
import {app} from './firebaseConfig'
import {ToastContainer} from 'react-toastify'
import DataProvider from './context/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </DataProvider>
  </React.StrictMode>,
)
