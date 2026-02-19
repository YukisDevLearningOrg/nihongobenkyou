import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'


const router = createBrowserRouter([])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error("Root element missing")
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)