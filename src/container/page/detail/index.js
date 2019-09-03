import React from 'react'
import { withContainer } from '../../../context'
import Breadcrunbs from '../../../component/control/breadcrumbs'

import config from '../../../../config'

const {domain} = config.server

class Detail extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      catId: null,
      postlink: null,
      data: null
    }
  }

  createMarkup (html) {
    return { __html: html }
  }

  componentDidMount () {
    this.getDetail()
  }

  componentDidUpdate () {
    if (this.props.catId !== this.state.catId || this.props.postlink !== this.state.postlink) {
      // this.getDetail()
    }
  }

  getDetail () {
    let {catId, postlink} = this.props
    const arr = postlink.split('-')
    const postId = arr[arr.length - 1]
    this.props.api.detail.get({id: postId}, (err, data) => {
      if (err) return
      this.setState({
        catId: catId,
        postlink: postlink,
        data: data
      })
    })
  }

  render () {
    let {data} = this.state
    if (!data) return null
    return (
      <div width='100%' heigth='auto'>
        <section id='services' className='services single section' width='100%'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <h1>{data.title}</h1>
                  <br />
                  <img src={`${domain}/${data.image}`} width='100%' />
                  <br />
                  <br />
                  <br />
                  <p>{data.description}</p>
                  <br />
                  <br />
                  <div className='col-md-12 col-sm-12 col-xs-12' dangerouslySetInnerHTML={this.createMarkup(data.content)} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

class Wrapper extends React.PureComponent {
  render () {
    let {catId, postlink} = this.props.match.params
    return (
      <React.Fragment>
        <Breadcrunbs categoryid={catId} />
        <Detail api={this.props.api} catId={catId} postlink={postlink} />
      </React.Fragment>
    )
  }
}
export default withContainer(Wrapper, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))
