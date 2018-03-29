import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h2 className="screen_out">Home</h2>
        <strong className="screen_out">서비스 바로가기 목록</strong>
        <ul>
          <li><Link to="/todos">Todos</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home