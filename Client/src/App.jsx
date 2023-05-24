import { Fragment, useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, Navigate } from "react-router-dom";
import "./styles/App.scss";
import { useMyProfile } from './queries/authQueries';

function App() {
  const { data, isLoading } = useMyProfile();
    return (
  <div className='App'>
    test
  </div>
       
    
  )
}

export default App
