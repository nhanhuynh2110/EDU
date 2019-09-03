import React from 'react'
import {Link} from 'react-router-dom'

class MainMenu extends React.PureComponent {
  render () {
    let {categories} = this.props
    return (
      <div className='header-inner'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='mobile-nav'>
                <span />
                <span />
                <span />
              </div>
              <div className='nav-area'>
                <nav className='mainmenu'>
                  <div className='menu-main-menu-container'>
                    <ul id='menu-main-menu' className='nav navbar-nav'>
                      {categories.map(cat => {
                        const {title} = cat
                        // const link =''
                        return (
                          <li key={cat._id} itemScope='itemscope' className='menu-item menu-item-type-post_type menu-item-object-page'>
                            <Link to={'/' + cat.link} title='Giới thiệu Edu Tour'>{title}</Link>
                          </li>
                        )
                      })}
                      {/* <li itemScope='itemscope' className='menu-item menu-item-type-post_type menu-item-object-page'>
                        <a title='Giới thiệu Edu Tour'>Giới thiệu Edu Tour </a>
                      </li>
                      <li itemScope='itemscope' className='menu-item menu-item-type-post_type menu-item-object-page'>
                        <a title='Nhịp sống Edu' className='dropdown-toggle'>Nhịp sống Edu </a>
                      </li>
                      <li itemScope='itemscope' className='menu-item menu-item-type-post_type menu-item-object-page'>
                        <a title='Hướng nghiệp Trải nghiệm' href='huong-nghiep-trai-nghiem/index.html'>Hướng nghiệp Trải nghiệm</a>
                      </li>
                      <li itemScope='itemscope' className='menu-item menu-item-type-post_type menu-item-object-page'>
                        <a title='Huấn luyện kỹ năng'>Huấn luyện kỹ năng</a>
                      </li>
                      <li itemScope='itemscope' className='menu-item menu-item-type-taxonomy menu-item-object-page'>
                        <a title='Du lịch - Sự kiện'>Du lịch &#8211; Sự kiện</a></li> */}
                      <li itemScope='itemscope' className='menu-item menu-item-type-post_type menu-item-object-page'>
                        <a title='Liên hệ'>Liên hệ</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MainMenu
