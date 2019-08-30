import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Breadcrunbs from '../../../component/control/breadcrumbs'
import ListContent from '../../../component/control/listContent'
import { withContainer } from '../../../context'

class Content extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      page: null,
      catId: null
    }
    this.page = this.props.page
    this.catId = this.props.match.params.catId
    this.getList = this.getList.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentDidMount () {
    let {page} = this.props
    this.getList(page)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.catId !== this.state.catId || this.props.page !== this.state.page) {
      this.getList(this.props.page)
    }
  }

  nextPage () {
    let {page} = this.props
    let {catId} = this.props.match.params
    this.props.history.push(`/${catId}/${parseInt(page) + 1}`)
    this.getList(parseInt(page) + 1)
  }

  prevPage () {
    let {page, catId} = this.props
    this.props.history.push(`/${catId}/${parseInt(page) - 1}`)
    this.getList(parseInt(page) - 1)
  }

  getList (page) {
    let {catId} = this.props
    const arr = catId ? catId.split('-') : []
    const categoryid = arr.length > 0 ? arr[arr.length - 1] : null
    if (!categoryid) return
    this.props.api.list.list({qcat: categoryid, page: page || 1}, (err, resp) => {
      if (err) return
      this.setState({posts: resp.posts, page: page, catId: catId})
    })
  }

  render () {
    return <ListContent page={this.props.page} nextPage={this.nextPage} prevPage={this.prevPage} posts={this.state.posts || []}/>
  }
}

class List extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      routes: [
        { key: 'list', path: '/', render: (props) => <Content page={this.props.match.params.page} catId={this.props.match.params.catId} {...this.props} /> }
      ]
    }
  }
  render () {
    let {catId} = this.props.match.params
    const arr = catId ? catId.split('-') : []
    const categoryid = arr.length > 0 ? arr[arr.length - 1] : null
    return (
      <React.Fragment>
        <Breadcrunbs categoryid={categoryid} />
        <div width='100%' heigth='auto'>
          {this.state.routes.map((route) => <Route {...route} />)}
        </div>

      </React.Fragment>
    )
  }
}

export default withContainer(List, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))
