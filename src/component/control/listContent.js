import React from 'react'

import config from '../../../config'

const {domain} = config.server

class ListContent extends React.PureComponent {
  render () {
    let { posts } = this.props
    return (
      <section id='services' className='services single section' width='100%'>
        <div className='container'>
          <div className='row'>
            {posts.map(item => this.renderItem(item))}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              {this.props.page > 1 && <i className='fa fa-chevron-circle-left fa-20' onClick={this.props.prevPage} style={{ fontSize: '3em', color: '#750013' }} aria-hidden='true' />}
              &nbsp;&nbsp;&nbsp;
              <i className='fa fa-chevron-circle-right fa-6' onClick={this.props.nextPage} style={{ fontSize: '3em', color: '#750013' }} aria-hidden='true' />
            </div>

          </div>
        </div>
      </section>
    )
  }

  renderItem (item) {
    const {image, title} = item
    return (
      <React.Fragment key={item._id}>
        <div className='col-md-12 col-sm-12 col-xs-12'>
          <div className='row'>
            <div className='col-md-4 col-sm-4 col-xs-4'>
              <a href='../../vi-1-loi-noi-doi-truoc-ca-lop-co-giao-khong-ngo-thi-thoang-lai-nhan-duoc-la-thu-voi-noi-dung-dac-biet/index.html'>
                <img src={`${domain}${image}`} title={title} alt={title} />
              </a>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-8'>
              <h4 className='entry-title'>
                <a href='../../vi-1-loi-noi-doi-truoc-ca-lop-co-giao-khong-ngo-thi-thoang-lai-nhan-duoc-la-thu-voi-noi-dung-dac-biet/index.html' rel='bookmark'>{title}</a>
              </h4>
              <div className='entry-meta'>
                <span className='byline' itemScope='itemscope' itemType='http://schema.org/Person' itemProp='author'>
                  <span className='author vcard' itemProp='name'>By : <span className='author vcard'><a className='url fn n' href='../../author/edutour.vn/index.html'>edutour.vn</a></span></span>
                </span>
                <span className='posted-on'>
                  Posted On :
                  <a href='../../vi-1-loi-noi-doi-truoc-ca-lop-co-giao-khong-ngo-thi-thoang-lai-nhan-duoc-la-thu-voi-noi-dung-dac-biet/index.html' rel='bookmark'>
                    <time className='entry-date published' dateTime='2019-08-08T10:24:08+00:00'>August 8, 2019</time>
                    <time className='updated' dateTime='2019-08-13T10:59:39+00:00'>August 13, 2019</time>
                  </a>
                </span>
                <span className='comments-link'>
                  <span className='comments-link'>
                    <a href='../../vi-1-loi-noi-doi-truoc-ca-lop-co-giao-khong-ngo-thi-thoang-lai-nhan-duoc-la-thu-voi-noi-dung-dac-biet/index.html#respond'>No Comment</a>
                  </span>
                </span>
              </div>

              <a href='../../vi-1-loi-noi-doi-truoc-ca-lop-co-giao-khong-ngo-thi-thoang-lai-nhan-duoc-la-thu-voi-noi-dung-dac-biet/index.html' className='read-more'>Đọc tiếp</a>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both', margin: '20px 0' }} />
      </React.Fragment>
    )
  }
}

export default ListContent
