import * as React from 'react'
import { graphql } from 'gatsby'
import {Link} from 'gatsby'
import Layout from '../../components/layouts/layout'
import Seo from '../../components/seo/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
       <ul>
      {
        data.allMdx.nodes.map(node => (
          <li key={node.frontmatter.title}>
           <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            <caption>// {node.frontmatter.date}</caption>
            <p>{node.excerpt}</p>
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "M.DD.YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />


export default BlogPage