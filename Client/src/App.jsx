import { Fragment, useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, Navigate } from "react-router-dom";
import "./styles/App.scss";
import { useMyProfile } from './queries/authQueries';
import GlobalSpinner from "./components/GlobalSpinner"
import Login from './pages/Login/Login'; 


function App() {
  const { data, isLoading } = useMyProfile();
  const router = createBrowserRouter([
    {
      path: "login",
      element: (
        <Fragment>
          {!isLoading && data?.user?.id ? (
            <Navigate to="/" />
          ) : isLoading ? (
            <GlobalSpinner />
          ) : (
            <Login />
          )}
        </Fragment>
      ),
    },
    {
      path: "/",
      element: (
        <Fragment>
          {isLoading ? (
            <GlobalSpinner />
          ) : data && !data?.authed ? (
            <Navigate to="/login" />
          ) : (
            <h1>Hello user</h1>
          )}
        </Fragment>
      ),
    },
  ]);

    return (
  <div className='App'>
    <RouterProvider router={router} />
  </div>
  
  );
}

export default App;
