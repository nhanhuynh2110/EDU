import React from 'react'

import { withContainer } from '../../context'
import config from '../../../config'

const {domain} = config.server

class Breadcrumbs extends React.PureComponent {
  
  render () {
    let {categories, categoryid} = this.props
    let cat = null
    if (categories) cat = categories.find(el => el._id === categoryid)
    let img = cat ? domain + cat.img : null
    return (
      <section id='breadcrumbs' className='breadcrumbs' style={{ backgroundImage: `url(${img})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <h2>
                <span>{cat && cat.title}</span>
              </h2>
          
              <div id='breadcrumb' className='bread-list'>
                <div role='navigation' aria-label='Breadcrumbs' className='breadcrumb-trail breadcrumbs' itemProp='breadcrumb'>
                  <ul className='trail-items' itemScope itemType='http://schema.org/BreadcrumbList'>
                    <meta name='numberOfItems' content='2' />
                    <meta name='itemListOrder' content='Ascending' />
                    <li itemProp='itemListElement' itemScope itemType='http://schema.org/ListItem' className='trail-item trail-begin'>
                        <a href='/' rel='home'><span itemProp='name'>Home</span></a>
                        <meta itemProp='position' content='1' />
                    </li>
                    <li itemProp='itemListElement' itemScope itemType='http://schema.org/ListItem' className='trail-item trail-end'>
                        <span itemProp='name'>{cat && cat.title}</span><meta itemProp='position' content='2' />
                    </li>
                </ul>
              </div>
              </div>

              
            </div>
          </div>
        </div>
    </section>
    )
  }
}


export default withContainer(Breadcrumbs, (c, props) => ({
  categories: c.data.categories
}))