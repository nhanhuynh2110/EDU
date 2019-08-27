import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

class DefaultLayout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='page' className='size'>
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default DefaultLayout
