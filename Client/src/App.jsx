import { Fragment, useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, Navigate } from "react-router-dom";
import "./styles/App.scss";
import { useMyProfile } from './queries/authQueries';
import GlobalSpinner from "./components/GlobalSpinner"

function App() {
  const { data, isLoading } = useMyProfile();
  const router = createBrowserRouter([
    { path: "login", element: <Fragment>
      {!isLoading && data?.user?.id ? <Navigate to="/"/> : isLoading ? <GlobalSpinner/> : <h1>Login</h1>}
    </Fragment> },
  ]);
    return (
  <div className='App'>
    <RouterProvider router={router}/>
  </div>
       
    
  )
}

export default App
