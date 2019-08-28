import React from 'react'

import config from '../../../config'

let domain = config.server.domain
class FeatureBlog extends React.PureComponent {
  renderBlog1 (post) {
    const {title, image, description} = post
    return (
      <div key={post._id} class="col-md-6">
        <div class="lt-item-bg">
          <img src={`${domain}/${image}`} alt="" class="img-fluid" />
          <h6><a href="">{title}</a></h6>
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">Technology</li>
            <li class="list-inline-item">February 11, 2019</li>
          </ul>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  renderBlog2 (post) {
    const {title, description, image} = post
    return (
      <div key={post._id} class="lt-item-sm d-flex col-md-12">
        <div class="row">
          <div class="lt-img col-md-4">
              <a href=""><img src={`${domain}/${image}`} alt=""/></a>
            </div>
            <div class="img-content col-md-8">
                <p><a href="">{title}</a></p>
                <span>February 11, 2019</span>
            </div>
        </div>
      </div>
    )
  }

  render () {
    let {data} = this.props
    return (
      <div class="latest-news">
        <div class="tab-box d-flex justify-content-between">
          <div class="sec-title">
            <h5>Nhịp Sống Edutour</h5>
          </div>
            
          {/* <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active show" data-toggle="tab" href="#tech">Technology</a>
            </li>
            <li class="nav-item">
              <a class="nav-link show" data-toggle="tab" href="#busi">Business</a>
            </li>
            <li class="nav-item">
              <a class="nav-link show" data-toggle="tab" href="#spor">Sports</a>
            </li>
          </ul> */}
        </div>
        <div class="tab-content">
          <div class="tab-pane active show">
            <div class="row">
              {data[0] && this.renderBlog1(data[0])}
              <div class="col-md-6">
                {data.map((post, index) => {
                  if (index > 0)
                  return (
                    this.renderBlog2(post)
                  )
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
