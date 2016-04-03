import 'font-awesome/css/font-awesome.css'
import './styles/index.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App.jsx'
import Entries from './components/Entries.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/entries" component={Entries} />
      <Route path="/entries/:id" component={Entries} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('app'))
