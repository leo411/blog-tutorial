import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Button from '../components/button'
import BlogList from '../components/blog-list'
import NavBar from '../components/navbar'
import banner from '../images/banner.jpeg'
import PostCategoriesNav from '../components/postcategoriesnav'

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMdx.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="All posts" />
                <NavBar />
                <div class="container">
                    <img src={banner} className="img-fluid" alt="" />
                    <div class="centered">{siteTitle}</div>
                </div>
                <PostCategoriesNav />
                <BlogList posts={posts} />
                <Link to="/">
                    <Button marginTop="85px">Go Home</Button>
                </Link>
            </Layout>
        )
    }
}

export default Blog

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
