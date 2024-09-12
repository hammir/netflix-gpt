import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'

import Browse from './Browse'

const Body = () => {

const appRouter = createBrowserRouter([ //it consists an array of paths
    {
        path:"/",
        element:<Login/>     
    },
    {
        path:"/browse",
        element:<Browse/>
    }
]);

  return (
    <div>
<RouterProvider router={appRouter}/>
    </div>
    
  )
}

export default Body