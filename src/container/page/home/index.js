import React from 'react'

import Slider from '../../../component/control/slider'
import FeatureBlog from '../../../component/control/featureBlog'
import ServicePost from '../../../component/control/servicesPost'
import FeatureSingle from '../../../component/control/featureSingle'
import Gallery from '../../../component/control/Gallery'
import { withContainer } from '../../../context'

class HomePage extends React.PureComponent {
  componentDidMount () {
    this.props.api.home.get()
  }

  render () {
    let {categories} = this.props
    if (!categories) categories = []
    else categories = categories.filter(cat => cat.isHome === true)
    return (
      <div id='content' className='site-content'>
        <Slider />
        <FeatureBlog data={this.props.postMain || []} />
        <ServicePost />
        <FeatureSingle data={categories} />
        <Gallery />
      </div>
    )
  }
}

export default withContainer(React.memo(HomePage), (c, props) => ({
  api: c.api,
  categories: c.data.categories || [],
  postMain: c.data.postmain || []
}))
