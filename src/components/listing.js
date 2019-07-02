import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Styled from "styled-components"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Post = Styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius:4px;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Listing = () => (
  <div>
    <SEO title="Home" />
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            <Link to={`/posts${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>
              Read More
            </Link>
          </Post>
        ))
      }
    />
  </div>
)

export default Listing
