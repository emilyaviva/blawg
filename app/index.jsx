import 'font-awesome/css/font-awesome.css'
import './styles/index.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Entries from './components/Entries'
import ConnectedEntry from './components/ConnectedEntry'
import AllTags from './components/AllTags'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/entries">
      <IndexRoute component={Entries} />
      <Route path=":id" component={ConnectedEntry} />
    </Route>
    <Route path="/tags">
      <IndexRoute component={AllTags} />
      <Route path=":tag" component={Entries} />
    </Route>
  </Router>
), document.getElementById('app'))
