import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browers from './Browers'
const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/browse",
          element:<Browers/>
        }
      ])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body