import React from 'react'

import Slider from '../../../component/control/slider'
import FeatureBlog from '../../../component/control/featureBlog1'
import ServicePost from '../../../component/control/servicesPost'
import FeatureSingle from '../../../component/control/featureSingle'
import Gallery from '../../../component/control/Gallery'
import { withContainer } from '../../../context'

class HomePage extends React.PureComponent {
  componentDidMount () {
    this.props.api.home.get()
  }

  render () {
    let {categories, galleries} = this.props
    if (!categories) categories = []
    if (!galleries) galleries = []
    else categories = categories.filter(cat => cat.isHome === true)
    return (
      <div id='content' className='site-content'>
        <Slider />
        <FeatureBlog data={this.props.postMain || []} />
        <ServicePost />
        <FeatureSingle data={categories} />
        <Gallery data={galleries} />
      </div>
    )
  }
}

// export default HomePage

export default withContainer(HomePage, (c, props) => ({
  api: c.api,
  galleries: c.data.galleries || [],
  categories: c.data.categories || [],
  postMain: c.data.postmain || []
}))
