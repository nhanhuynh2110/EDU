import React from 'react'

import TopBar from './topbar'
import Extra from './extra'
import MainMenu from './mainMenu'

class Headers extends React.PureComponent {
  render () {
    return (
      <header id='masthead' className='site-header header stickytwo headertwo' role='banner'>
        <TopBar />
        <Extra />
        <MainMenu categories={this.props.categories} />
      </header>
    )
  }
}

export default Headers
