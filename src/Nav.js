import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

// when creating Link components, 'to' attr no longer needs '/' char first. but keep for home nav (to="/")
const Nav = ( {search, setSearch }) => {
    return (
        <nav className='Nav'>
            <form className='Nav-searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input 
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul>
                <li><Link className='Nav-link' to="/" >Home</Link></li>
                <li><Link className='Nav-link' to="post" >Post</Link></li>
                <li><Link className='Nav-link' to="about" >About</Link></li>
            </ul>
            
        </nav>
    )
}

export default Nav