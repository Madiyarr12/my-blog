import React from 'react'
import AboutMe from '../components/AboutMe'
import Feedback from '../components/Feedback'
import LastPosts from '../components/LastPosts'
import LastProjects from '../components/LastProjects'
import Layout from '../components/Layout'

function BlogMainPage() {
  return (
    <Layout>
      <AboutMe/>
      <LastProjects/>
      <LastPosts/>
      <Feedback/>
    </Layout> 
  )
}

export default BlogMainPage