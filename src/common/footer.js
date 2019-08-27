import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer id='footer' className='footer dark site-footer'>
        <a className='goToTop' href='#' id='scrollTop'>
          <i className='fa fa-angle-up' />
          <span>Top</span>
        </a>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-xs-12'>
                <div className='copyright'>
                  <p>CÔNG TY CỔ PHẦN DU LỊCH HƯỚNG NGHIỆP EDUCATION TOUR
                    412 Nguyễn Thị Minh Khai, Q.3, TP.HCM</p>
                </div>
                {/* End Copyright */}
              </div>

              <div className='col-md-6 col-sm-12 col-xs-12'>
                <ul className='social'>
                  <li><a><i className='fa fa-facebook' /></a></li>
                  <li><a><i className='fa fa-instagram' /></a></li>
                  <li><a><span className='fa fa-youtube' /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
