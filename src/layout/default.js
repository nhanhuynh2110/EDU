import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { withContainer } from '../context'

class DefaultLayout extends React.PureComponent {
  render () {
    const {categories} = this.props
    return (
      <React.Fragment>
        <div id='page' className='size'>
          <Header categories={categories}/>
          {this.props.children}
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default withContainer(React.memo(DefaultLayout), (c, props) => ({
  categories: c.data.categories || []
}))
