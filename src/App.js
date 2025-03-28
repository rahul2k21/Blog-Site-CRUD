import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import blogData from "./data"; 
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/Contact";


const App = () => {
  const [blogs, setBlogs] = useState(blogData); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/add" element={<AddBlog setBlogs={setBlogs} />} />
        <Route path="/search-page" element={<Search />} />
        <Route path="/contact-page" element={<Contact />} />


      </Routes>
    </Router>
  );
};

export default App;
