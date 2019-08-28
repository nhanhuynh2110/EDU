import React from 'react'

class Slider extends React.Component {
  render () {
    return (
      <section className='hero-area'>
        <div className='slider-one'>
          <div className='single-slider'
            style={{backgroundImage: `url(i0.wp.com/edutour.vn/wp-content/uploads/2019/07/MG_045942b6.jpg?resize=1320%2C500&amp;ssl=1)`}}>
            <div className='edu-overlay' />
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12  col-xs-12'>
                  <div className='slide-text'>
                    <h2>Mang lớp học ra thực tiễn</h2>

                    <p>Định hướng nghề nghiệp và rèn luyện kỹ năng thông qua các hoạt động thực tiễn bên ngoài</p>

                    <div className='slide-btn'>
                      <a className='btn primary'>Enjoying - Doing - Learning<i className='fa fa-play' /></a>
                    </div>

                  </div>
                  {/* End SLider Text */}
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
          <div className='single-slider'
            style={{backgroundImage: `url(i2.wp.com/edutour.vn/wp-content/uploads/2019/06/EduTour-Team65e8.jpg?resize=1280%2C500&amp;ssl=1)`}}>
            <div className='edu-overlay' />
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12  col-xs-12'>
                  <div className='slide-text '>
                    <h2>Về Chúng tôi</h2>

                    <p>Được thành lập vào ngày 21/01/2019 với những người có kinh nghiệm trong lĩnh vực giáo dục và
                      hướng nghiệp.&hellip;</p>

                    <div className='slide-btn'>
                      <a className='btn primary'> Về Education Tour<i className='fa fa-play' />
                      </a>
                    </div>

                  </div>
                  {/* End SLider Text */}
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
        </div>
      </section>
    )
  }
}

export default Slider
