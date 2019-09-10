import React from 'react'

import config from '../../../config'
import { withContainer } from '../../context'

let domain = config.server.domain
class FeatureBlog extends React.PureComponent {
  renderBlog1 (post) {
    const {categories} = this.props
    const {title, image, description, categoryPostId} = post
    const cat = categories.find(el => el._id === categoryPostId)
    const link = '/' + cat.link + '/' + title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9 ]/g, '').replace(/[ ]/g, '-').toLowerCase() + '-' + post._id
    return (
      <div key={post._id} className='col-md-6'>
        <div className='lt-item-bg'>
          <img src={`${domain}/${image}`} alt='' className='img-fluid' />
          <h6><a href='{link}'>{title}</a></h6>
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
    const {categories} = this.props
    const {title, image, description, categoryPostId} = post
    const cat = categories.find(el => el._id === categoryPostId)
    const link = '/' + cat.link + '/' + title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9 ]/g, '').replace(/[ ]/g, '-').toLowerCase() + '-' + post._id
    return (
      <div key={post._id} className='lt-item-sm d-flex col-md-12'>
        <div className='row'>
          <div className='lt-img col-md-4'>
              <a href={link}><img src={`${domain}/${image}`} alt=''/></a>
            </div>
            <div className='img-content col-md-8'>
                <p><a href={link}>{title}</a></p>
                <span>February 11, 2019</span>
            </div>
        </div>
      </div>
    )
  }

  render () {
    let {data} = this.props
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

export default withContainer(FeatureBlog, (c, props) => ({
  categories: c.data.categories
}))
