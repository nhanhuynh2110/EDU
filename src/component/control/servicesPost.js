import React from 'react'

class ServicePost extends React.Component {
  render () {
    return (
      <section id='service-post-section' className='whysection hs-section'>
        <div className='service-left-bg' style={{backgroundImage: `url(wp-content/uploads/2019/07/Dinh-huong-nghe-nghiep.jpg)`}} />
        <div className='container'>
          <div className='service-posts clearfix'>
            <div className='section-title-tagline'>
              <h3>Trắc nghiệm - Định hướng nghề nghiệp </h3>
            </div>

            <div className='service-post-wrap'>
              <div className='service-post clearfix'>
                <div className='service-icon'><i className='fa fa fa-th-list' /></div>

                <div className='service-excerpt'>
                  <a><h5>Làm ngay</h5></a>
                  {/* <div className='service-text'>
                    <p>Loading…</p>

                    <a href='3388-2/index.html' className='why-read'>
                      Read More <i className='fa fa-angle-right' aria-hidden='true'></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServicePost
