import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { withContainer } from '../context'

class DefaultLayout extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    this.props.api.home.menu({}, (err, data) => {
      if (err) return null
      this.setState({categories: data.menu})
    })
  }

  render () {
    const {categories} = this.state
    return (
      <React.Fragment>
        <div id='page' className='size'>
          <Header categories={categories} />
          {this.props.children}
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

// export default DefaultLayout

export default withContainer(React.memo(DefaultLayout), (c, props) => ({
  api: c.api
}))
