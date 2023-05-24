import { Fragment, useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, Navigate } from "react-router-dom";
import "./styles/App.scss";
import { useMyProfile } from './queries/authQueries';

function App() {
  const { data, isLoading } = useMyProfile();
  const router = createBrowserRouter([
    { path: "login", element: <Fragment>Login</Fragment> },
  ]);
    return (
  <div className='App'>
    <RouterProvider router={router}/>
  </div>
       
    
  )
}

export default App
