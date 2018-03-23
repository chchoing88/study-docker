import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

class WithRouter extends Component {
  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidUpdate(prevProps) {

  }

  render() {
    const { location } = this.props
    const path = location.pathname.slice(1).split('/')[0]

    return (
      <div
        id="kakaoWrap"
        className={classNames({
          [`wrap_${path ? path : 'home'}`]: true,
        })}
      >
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(WithRouter)
