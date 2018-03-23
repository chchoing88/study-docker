import React, { Component } from 'react'
import { isMobile, isAndroid, isIos, getVersion } from '../../util/detect'

const withDetect = (WrappedComponent, target = []) =>
  class extends Component {
    constructor() {
      super()

      this.state = {
        isMobile: isMobile(),
        isAndroid: isAndroid(),
        isIos: isIos(),
        ...target.reduce(
          (p, n) => ({
            ...p,
            [n.replace(/\s/g, '_')]: getVersion(n),
          }),
          {}
        ),
      }
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }

export default withDetect
