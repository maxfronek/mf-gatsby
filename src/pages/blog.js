// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo/seo'

const BlogPage = () => {
    return (
      <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
      </Layout>
    )
  }
  
  export const Head = () => <Seo title="My Blog Posts" />
  
  export default BlogPage