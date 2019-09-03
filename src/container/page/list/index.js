import React from 'react'
import queryString from 'query-string'
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
    this.props.history.push(`/${catId}?page=${parseInt(page) + 1}`)
    this.getList(parseInt(page) + 1)
  }

  prevPage () {
    let {page, catId} = this.props
    this.props.history.push(`/${catId}?page=${parseInt(page) - 1}`)
    this.getList(parseInt(page) - 1)
  }

  getList (page) {
    let {catId} = this.props
    if (!catId) return
    this.props.api.list.list({qcat: catId, page: page || 1}, (err, resp) => {
      if (err) return
      this.setState({posts: resp, page: page, catId: catId})
    })
  }

  render () {
    return <ListContent catId={this.props.catId} page={this.props.page} nextPage={this.nextPage} prevPage={this.prevPage} posts={this.state.posts || []}/>
  }
}

class List extends React.PureComponent {
  render () {
    let {catId} = this.props.match.params
    const parsed = queryString.parse(this.props.location.search)
    let {page} = parsed
    return (
      <React.Fragment>
        <Breadcrunbs categoryid={catId} />
        <div width='100%' heigth='auto'>
          <Content page={page ? parseInt(page) : 1} catId={this.props.match.params.catId} {...this.props} />
        </div>

      </React.Fragment>
    )
  }
}

export default withContainer(List, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))
