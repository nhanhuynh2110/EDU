import React from 'react'
import Slider from '../../../component/control/slider'
import FeatureBlog from '../../../component/control/featureBlog'
import ServicePost from '../../../component/control/servicesPost'
import FeatureSingle from '../../../component/control/featureSingle'
import Gallery from '../../../component/control/Gallery'
export default class Grid extends React.Component {
  render () {
    return (
      <div id='content' className='site-content'>
        <Slider />
        <FeatureBlog />
        <ServicePost />
        <FeatureSingle />
        <Gallery />
      </div>

    )
  }
}
