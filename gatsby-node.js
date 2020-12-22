const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  if(node.internal.type === 'MarkdownRemark'){
    const slug = path.basename(node.fileAbsolutePath, '.md' )
    
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

  }
}

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions

  const blogTempalte = path.resolve(`src/templates/blog.js`);
  const res = await graphql(`
    query{
      allMarkdownRemark{
        edges{
          node{
            fields{
              slug
            }
            
          }
        }
      }
      
    }
  `)
  

  res.data.allMarkdownRemark.edges.forEach((edge) =>{
    createPage({
      component: blogTempalte,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

  console.log(res.status, res)
  //1. Get path to hljs-template
  //2. Get markdown data
  //3. Create new changes
}