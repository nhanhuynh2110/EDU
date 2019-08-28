import React from 'react'

class Extra extends React.Component {
  render () {
    return (
      <div className='header-inner logo_and_extra_holder'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-3 col-sm-12 col-xs-12'>
              <div className='logo site-branding'>
                <a href='index.html' className='custom-logo-link' rel='home' itemProp='url'>
                  <img width='744' height='229'
                    src='/img/logo.jpg'
                    className='custom-logo jetpack-lazy-image' alt='Education Tour' itemProp='logo'
                    data-lazy-srcset='https://i2.wp.com/edutour.vn/wp-content/uploads/2019/05/50121330_2551725008188041_6190547946698702848_n.jpg?w=744&amp;ssl=1 744w, https://i2.wp.com/edutour.vn/wp-content/uploads/2019/05/50121330_2551725008188041_6190547946698702848_n.jpg?resize=300%2C92&amp;ssl=1 300w, https://i2.wp.com/edutour.vn/wp-content/uploads/2019/05/50121330_2551725008188041_6190547946698702848_n.jpg?resize=600%2C185&amp;ssl=1 600w'
                    data-lazy-sizes='(max-width: 744px) 100vw, 744px'
                    data-lazy-src='https://i2.wp.com/edutour.vn/wp-content/uploads/2019/05/50121330_2551725008188041_6190547946698702848_n.jpg?fit=744%2C229&amp;ssl=1&amp;is-pending-load=1'
                    // srcSet='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                  />
                </a>
                <h1 className='site-title'>
                  <a href='index.html' rel='home'>
                    Education Tour </a>
                </h1>
                <p className='site-description'>Let experience</p>
              </div>
            </div>

            <div className='col-md-9 col-sm-12 col-xs-12 edu-right-align'>

              <div className='header_contact_details_inner'>
                <div className='fa_icon'><i className='fa fa-phone' aria-hidden='true' /></div>
                <div className='title_phone header_contact_details_inner_content'>
                  <span className='pnone_title'>call us</span>
                  <a href='tel:84909858669'>
                    <span className='phone'>(+84-9) 09 858 669</span>
                  </a>
                </div>
              </div>

              <div className='header_contact_details_inner'>
                <div className='fa_icon'><i className='fa fa-envelope-o' aria-hidden='true' /></div>
                <div className='title_email_wrap header_contact_details_inner_content'>
                  <span className='title_email'>email us</span>
                  <a href='mailto:le&#104;&#097;i.edutour&#064;&#103;&#109;&#097;&#105;&#108;.&#099;o&#109;'>
                    <span
                      className='email_address'>&#108;eh&#097;i&#046;e&#100;&#117;&#116;our&#064;g&#109;&#097;&#105;&#108;&#046;&#099;om</span>
                  </a>
                </div>
              </div>

              <div className='header_contact_details_inner'>
                <div className='fa_icon'><i className='fa fa-map-marker' aria-hidden='true' /></div>

                <div className='title_location_wrap header_contact_details_inner_content'>
                  <span className='title_location'>locate us</span>
                  <span className='location'>412 Nguyễn Thị Minh Khai, Q.3, TP.HCM</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Extra
