import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MEDIA from 'helpers/media'
import Layout from 'hoc/Layout/layout'
import SEO from 'components/SEO/SEO'
import {
  toggleDarkMode,
} from 'store/actions/index'

const Container = styled.h1`
  color: blue;
  ${MEDIA.MIN_TABLET`
    color: ${props => (props.isDarkMode ? 'blue' : 'green')};
  `};
`

const SecondPage = ({
  toggleDarkMode,
  isDarkMode,
  location,
}) => {
  const onClickHandler = () => {
    toggleDarkMode(!isDarkMode)
  }
  return (
    <Layout>
      <SEO title="Page two" pathname={location.pathname} />
      <Container isDarkMode={isDarkMode}>Hi from the second page</Container>
      <div>
        {isDarkMode ? <div>DARK MODE</div> : <div>LIGHT MODE</div>}Welcome to
        page 2
      </div>
      <button onClick={onClickHandler}>CLICK ME</button>
      <Link to="/">Go to page 2</Link>
    </Layout>
  )
}

const actions = {
  toggleDarkMode,
}

const mapStateToProps = state => {
  return {
    isDarkMode: state.app.isDarkMode,
  }
}

export default connect(
  mapStateToProps,
  actions
)(SecondPage)
