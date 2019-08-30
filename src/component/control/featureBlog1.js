import React from 'react'

import config from '../../../config'

let domain = config.server.domain
class FeatureBlog extends React.PureComponent {
  renderBlog1 (post) {
    const {title, image, description} = post
    return (
      <div key={post._id} className='col-md-6'>
        <div className='lt-item-bg'>
          <img src={`${domain}/${image}`} alt='' className='img-fluid' />
          <h6><a href=''>{title}</a></h6>
          <ul className='list-unstyled list-inline'>
            <li className='list-inline-item'>Technology</li>
            <li className='list-inline-item'>February 11, 2019</li>
          </ul>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  renderBlog2 (post) {
    const {title, description, image} = post
    return (
      <div key={post._id} className='lt-item-sm d-flex col-md-12'>
        <div className='row'>
          <div className='lt-img col-md-4'>
            <a href=''><img src={`${domain}/${image}`} alt='' /></a>
          </div>
          <div className='img-content col-md-8'>
            <p><a href=''>{title}</a></p>
            <span>February 11, 2019</span>
          </div>
        </div>
      </div>
    )
  }

  render () {
    let {data} = this.props
    console.log('data', data)
    return (
      <div className='latest-news'>
        <div className='tab-box d-flex justify-content-between'>
          <div className='sec-title'>
            <h5>Nhịp Sống Edutour</h5>
          </div>

          {/* <ul className='nav nav-tabs' role='tablist'>
            <li className='nav-item'>
              <a className='nav-link active show' data-toggle='tab' href='#tech'>Technology</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link show' data-toggle='tab' href='#busi'>Business</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link show' data-toggle='tab' href='#spor'>Sports</a>
            </li>
          </ul> */}
        </div>
        <div className='tab-content'>
          <div className='tab-pane active show'>
            <div className='row'>
              {data[0] && this.renderBlog1(data[0])}
              <div className='col-md-6'>
                {data.map((post, index) => {
                  if (index > 0) return this.renderBlog2(post)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeatureBlog
