import React from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'
import {
  asyncHome,
  asyncTodos,
} from '../../screens'

const Pages = ({location}) => {
  return (
    <div id="cMain">
      <Switch {...{location}}>
        <Route exact path="/" component={asyncHome}/>
        <Route path="/todos" component={asyncTodos}/>
      </Switch>
    </div>
  )
}

export default withRouter(Pages)
