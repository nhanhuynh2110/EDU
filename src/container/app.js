import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '../layout/default'
import { withContainer } from '../context'
import { Home, List } from './page'

class App extends React.PureComponent {
  // componentDidMount () {
  //   const script = document.createElement('script')

  //   script.src = '/wp-content/cache/minify/45afa05e2.js?x43415'
  //   script.async = true
  //   document.body.appendChild(script)
  //   const script1 = document.createElement('script')

  //   script1.src = '/wp-content/cache/minify/513f405e2.js?x43415'
  //   script1.async = true

  //   document.body.appendChild(script)
  // }
  render () {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:catId' render={(props) => <Redirect to={`/${props.match.params.catId}/1`} />} />
              <Route path='/:catId/:page' component={List} />
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    )
  }
}

export default withContainer(App, (c) => ({}))
