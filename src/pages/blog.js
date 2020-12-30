
import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Layout from '../components/Layout/layout'
import blogStyles from './blog.module.scss'
const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(
        sort:{
          fields: publishedDate,
          order: DESC
        }
      ){
        edges{
          node{
            title,
            slug,
            publishedDate(formatString: " MMMM DD YYYY")
          }
        }
      }
    }
    `)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge, index) =>(
                    <li key={index} className={blogStyles.post}> 
                      <Link to={edge.node.slug}>
                        <h2>{edge.node.title}</h2>
                         <p>{edge.node.publishedDate}</p>
                      </Link>
                     </li>
                ))}
            </ol>
        </Layout>
    )
}

export default BlogPage