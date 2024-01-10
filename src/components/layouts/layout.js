import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MainMenu from '../main-menu/main-menu'

// class imports
import {
  container,
  heading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={container}>
      <header>{data.site.siteMetadata.title}</header>
      <MainMenu />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout