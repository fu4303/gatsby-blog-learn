import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About me</h1>
            <p>I started my coding journey in April this year. Got started because I was curious about teech and I wanted to know more about it. After a few weeks of freecodecamp I loved coding and I decided to be consistent with it and create a routine. I join the #100daysofcode on twitter and I started to learn more and create simple websites with html, css and Javascript. Now I am learning React and Gatsby to build static sites.
            </p>
            <p><Link to='/contact'>Want to work with me or say hey? reach out</Link></p>
        </Layout>
    )
}

export default AboutPage