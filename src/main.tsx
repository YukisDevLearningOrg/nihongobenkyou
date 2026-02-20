import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import App from "./App.tsx";
import HomeRoute from "./routes/HomeRoute.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomeRoute/>
            }
        ]

    }
])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error("Root element missing")
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)