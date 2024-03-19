import React from 'react'
import Feed from "./Feed"
import './Home.css'

const Home = ({posts, searchResults}) => {
    console.log(posts)
    return (
        <main className='Home'>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ merginTop: "2rem" }}>No posts to display.</p>
            )}
        </main>
    )
}

export default Home