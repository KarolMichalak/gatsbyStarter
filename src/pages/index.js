import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from 'hoc/Layout/layout'
import SEO from 'components/SEO/SEO'

const Paragraph = styled.p`
  font-size: 1rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
