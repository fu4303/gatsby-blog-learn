import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout/layout'


export const query = graphql`
query($slug: String){
  contentfulBlogPost(slug: {
    eq: $slug
  }
  ){
    title
    publishedDate(formatString: "MMMM DD, YYYY")
  }
 }
`;
const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title }</h1>
      <p>{props.data.contentfulBlogPost.publishedDate }</p>
      
    </Layout>
  )
}

export default Blog
