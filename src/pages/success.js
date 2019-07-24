import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = ({ location }) => (
  <Layout location={location}>
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "20px",
      }}>
      <h1
        style={{
          fontSize: "50px",
        }}>
        Your message has been submited, thank you for your time.
      </h1>
    </div>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default About
