import React from 'react'
import {Link} from 'react-router-dom'

import config from '../../../config'

let domain = config.server.domain

class FeatureSingle extends React.PureComponent {
  renderFeaturesSingle (item) {
    let {img, title, description} = item
    const link = `/${title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, "").replace(/[ ]/g, "-").toLowerCase()}-${item._id}`
    return (
      <div key={item._id} className='col-md-4 col-sm-6 col-xs-12 featuressingle'>
        <Link to={link}
          title={title}><img width='800' height='500'
            src={`${domain}/${img}`}
            className='attachment-education-web-blog size-education-web-blog wp-post-image jetpack-lazy-image' alt=''
            data-lazy-src='https://i1.wp.com/edutour.vn/wp-content/uploads/2019/07/hands-600497_960_720.jpg?resize=800%2C500&amp;ssl=1&amp;is-pending-load=1'
          />
        </Link>
        <h3><Link to={link}>{title}</Link></h3>

        <p>{description}</p>

        <Link className='smicon-read sc-btn' target='_self' to={link}> Learn More </Link>

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
