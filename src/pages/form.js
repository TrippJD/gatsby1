import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <form method="post" name="test" action="/form" data-netlify="true">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </div>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default About
