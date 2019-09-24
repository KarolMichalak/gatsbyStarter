import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Facebook from 'components/SEO/Facebook'
import Twitter from 'components/SEO/Twitter'

function SEO({
  description,
  lang,
  keywords,
  title,
  pathname,
  article,
  author,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteData = data.site.siteMetadata
        const metaDescription = description || siteData.description
        const metaKeywords = keywords || siteData.keywords
        const metaImage = `${siteData.siteUrl}${siteData.image}`
        const metaUrl = `${siteData.siteUrl}${pathname}`
        const metaAuthor = author || siteData.author
        return (
          <>
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            >
              <meta name="keywords" content={metaKeywords} />
              <meta name="description" content={metaDescription} />
              <meta name="image" content={metaImage} />
              <meta name="url" content={metaUrl} />
              <meta name="author" content={metaAuthor} />
            </Helmet>
            <Facebook
              description={metaDescription}
              image={metaImage}
              title={title}
              type={article ? 'article' : 'website'}
              url={metaUrl}
              locale={siteData.ogLanguage}
              name={siteData.social.facebook}
            />
            <Twitter
              title={title}
              image={metaImage}
              description={metaDescription}
              username={`@${siteData.social.twitter}`}
            />
          </>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  pathname: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        keywords
        author
        social {
          twitter
          facebook
        }
        image
        ogLanguage
      }
    }
  }
`
