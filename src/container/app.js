import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../layout/default'
import { withContainer } from '../context'
import { Home } from './page'

class App extends React.PureComponent {

  render () {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    )
  }
}

export default withContainer(App, (c) => ({
  data: c.data
}))
