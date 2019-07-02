import React from "react"

import Layout from "../components/layout"
import Listing from "../components/listing"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
)

export default IndexPage

/* <Layout>
<SEO title="Home" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>
<Link to="/page-2/"> Page 2 </Link>
<span>|</span>
<Link to="/about/"> About Us </Link>
</Layout> */
