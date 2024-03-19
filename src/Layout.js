import React from 'react'
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import './Layout.css';
import { Outlet } from 'react-router-dom';

// add { search, setSearch } to be passed to Nav
const Layout = ({search, setSearch}) => {
  return (
    <div className="App">
        <Header title="React JS Blog" />
        <Nav search={search} setSearch={setSearch}/>
        <Outlet className="flex-grow" />
        <Footer />
    </div>
  )
}

export default Layout