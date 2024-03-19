import Layout from './Layout';
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";

import Missing from "./Missing";

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        title: "My First Post",
        datetime: "March 18, 2024 07:51:42 PM",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit accusamus laboriosam, officia minus delectus architecto maxime fuga voluptate sint dolores culpa deleniti excepturi aperiam, numquam consequuntur, provident pariatur quam!"
      },
      {
        id: 2,
        title: "My Second Post",
        datetime: "March 18, 2024 08:11:39 PM",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit modi eligendi ipsam voluptatibus quae, ab cum dolorum ipsa excepturi sequi cupiditate vel magni provident mollitia reiciendis aut amet. Ipsam, molestias."
      },
      {
        id: 3,
        title: "My Third Post",
        datetime: "March 18, 2024 08:24:02 PM",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo inventore optio nisi hic eos ad ut ullam exercitationem, iste at nesciunt, possimus reiciendis. Adipisci numquam nulla assumenda laudantium sed a."
      }
    ]
  )
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      (post.title).toLowerCase().includes(search.toLowerCase()) || (post.body).toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {
      id: id,
      datetime: datetime,
      title: postTitle,
      body: postBody
    }
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id))
    navigate('/')
  }
  return (
    
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home 
                                      posts={searchResults}
                                      searchResults={searchResults}
                                />} />
          <Route path="post">
            <Route index element={<NewPost
                                      handleSubmit={handleSubmit}
                                      postTitle={postTitle}
                                      setPostTitle={setPostTitle}
                                      postBody={postBody}
                                      setPostBody={setPostBody} />} />
            <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>      
      </Routes>      
      
    
  );
}

export default App;
