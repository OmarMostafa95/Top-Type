import React from "react"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Home from "./components/Home/Home"
import Layout from "./components/Layout/layout"
import Login1 from "./components/Login/Login1"
import Register1 from "./components/Register/Register1"
import { ToastContainer } from "react-toastify"
function App() {

    let x = createBrowserRouter([
        {
            path: '/', element: <Layout />, children: [
                { index: true, element: <Home /> },
                {path:'/login',element:<Login1/>},
                {path:'/Register',element:<Register1/>},
            ]
        }
    ])
    return <><RouterProvider router={x}/> 
     <ToastContainer position="bottom-right"/> 
     </>
}
export default App
