import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import footerStyles from './footer.modules.scss'

const Footer = () => {
     
    return (
        <StaticQuery
          query={graphql`
            query FooterQuery{
                site{
                    siteMetadata{
                        author
                    }
                }
            }
          `}

          render={data => (
            <footer className={footerStyles.footer}>
               <p>Created by {data.site.siteMetadata.author}, &copy; {new Date().getFullYear()}</p>
            </footer>
          )}
        />
        
    )
}

export default Footer



