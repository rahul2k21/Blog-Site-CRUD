import React from 'react'
import BlogList from '../components/BlogList'
import Navbar from './Navbar';
import Menubar from '../components/Menubar';
import Footer from '../components/Footer';
import SocialFooter from '../components/SocialFooter';

function Home({blogs}) {
  return (
    <div>
        <Menubar />
      <Navbar />
      <BlogList blogs={blogs} />
      <Footer />
      <SocialFooter />
    </div>
  );
}

export default Home
