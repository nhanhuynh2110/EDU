import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '../layout/default'
import { withContainer } from '../context'
import { Home, List } from './page'

class App extends React.PureComponent {
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
