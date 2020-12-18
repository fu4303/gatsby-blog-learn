import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <h2>Let's get in touch and talk more.</h2>
            <p>muchirijane@outlook.com</p>
            <p>Follow me on <Link to='https://twitter.com/TracyCss'>Twitter</Link></p>
        </Layout>
    )
}

export default ContactPage