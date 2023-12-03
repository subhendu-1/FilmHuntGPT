// import React, { Component } from 'react'
import Login from './Login';
import Browser from '../components/Browser.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/login",
            element: <Login/>,
        },
        {
            path:"/Browser",
            element: <Browser/>,
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body