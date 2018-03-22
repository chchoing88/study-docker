import React from 'react'
import Router from './components/Router'
import WithRouter from './components/WithRouter'
import Pages from './components/Pages'

const App = () => (
  <Router>
    <WithRouter>
      <Pages />
    </WithRouter>
  </Router>
)

export default App