import React from 'react'
import {Link} from 'react-router-dom'

import config from '../../../config'

let domain = config.server.domain

class FeatureSingle extends React.PureComponent {
  renderFeaturesSingle (item) {
    let {img, title, description} = item
    const link = item.link
    return (
      <div key={item._id} className='col-md-4 col-sm-6 col-xs-12 featuressingle'>
        <a href={link} title={title}>
          <img width='800' height='500' src={`${domain}/${img}`}
            className='attachment-education-web-blog size-education-web-blog wp-post-image jetpack-lazy-image' alt='' />
        </a>
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
        <a className='smicon-read sc-btn' target='_self' href={link}>Đọc Thêm</a>
      </div>
    )
  }
  render () {
    let {data} = this.props
    return (
      <section className='features hs-section'>
        <div className='container'>
          <div className='row'>
            {data.map(item => this.renderFeaturesSingle(item))}
          </div>
        </div>
      </section>
    )
  }
}

export default FeatureSingle
