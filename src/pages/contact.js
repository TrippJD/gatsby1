import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Form from "../components/form"

const About = ({ location }) => (
  <Layout location={location}>
    <Form />
    <Link to="/">Homepage</Link>
  </Layout>
)

export default About
