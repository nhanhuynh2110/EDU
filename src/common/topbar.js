import React from 'react'

class TopBar extends React.Component {
  render () {
    return (
      <div className='topbar'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12 cancell_position'>
              <div className='topbar-inner'>
                <div className='row'>

                  <div className='col-md-9 col-sm-8 col-xs-12'>
                    <div className='top_newticker'>
                      <span>CÔNG TY CỔ PHẦN DU LỊCH HƯỚNG NGHIỆP EDUCATION TOUR</span>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-4 col-xs-12'>
                    <ul className='social'>
                      <li>
                        <a href='https://www.facebook.com/educationtourhcm/'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-instagram' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <span className='fa fa-youtube' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
