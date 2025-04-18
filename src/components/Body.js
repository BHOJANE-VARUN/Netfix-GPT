import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browers from './Browers'
const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path:"/",
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