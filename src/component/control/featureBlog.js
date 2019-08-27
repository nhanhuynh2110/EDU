import React from 'react'

import config from '../../../config'

let domain = config.server.domain
class FeatureBlog extends React.PureComponent {
  renderBlog1 (post) {
    const {title, image, description} = post
    return (
      <div key={post._id} className='featured-blog-items'>
        <div className='news-snippet'>
          <a rel='bookmark' className='featured-image'>
            <img width='300' height='200'
              src={`${domain}/${image}`}
              className='attachment-medium size-medium wp-post-image' alt=''
              sizes='(max-width: 300px) 100vw, 300px' />
          </a>

          {/* summary */}
          <div className='summary'>
            <h6 className='category'><a>Design</a></h6>
            <h6 className='category'><a>Fashion</a></h6>

            <h3 className='news-title'><a rel='bookmark'>${title}</a></h3>

            <div className='info'>
              <ul className='list-inline'>
                <li>
                  <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                    data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                    data-fa-i2svg=''>
                    <path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z' />
                  </svg>
                  <a>June 11, 2018</a>
                </li>
              </ul>
            </div>

            <div className='summary-excerpt'>
              <p>{description}</p>
            </div>
            <a rel='bookmark' className='readmore'>Read More</a>

          </div>
          {/* summary */}
        </div>
      </div>
    )
  }

  renderBlog2 (post) {
    const {title, description, image} = post
    return (
      <div key={post._id} className='featured-blog-items'>
        <div className='news-snippet'>
          <a rel='bookmark' className='featured-image'>
            <img width='300' height='200'
              src={`${domain}/${image}`}
              className='attachment-medium size-medium wp-post-image'
              sizes='(max-width: 300px) 100vw, 300px' />
          </a>

          {/* summary */}
          <div className='summary'>
            <h6 className='category'><a>Uncategorized</a></h6>

            <h3 className='news-title'><a rel='bookmark'>${title}</a></h3>

            <div className='info'>
              <ul className='list-inline'>
                <li>
                  <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                    data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                    data-fa-i2svg=''>
                    <path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z' />
                  </svg>
                  <a>June 21, 2018</a>
                </li>
              </ul>
            </div>

            <div className='summary-excerpt'><p>{description}</p></div>


            <a rel='bookmark' className='readmore'>Read More</a>

          </div>
          {/* summary */}
        </div>
      </div>
    )
  }

  render () {
    let {data} = this.props
    return (
      <div className='featured-blog'>
        <div className='container'>
          <div className='row'>

            <div className='featured-layout featured-blog-view-1'>
              {data.map((post, index) => {
                if (index === 0) return this.renderBlog1(post)
                return this.renderBlog2(post)
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeatureBlog
