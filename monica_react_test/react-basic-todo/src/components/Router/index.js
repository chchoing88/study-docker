import React from 'react'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import withDetect from '../withDetect'

const Router = ({ children, IE }) => {
  const Portal = IE < 10 ? HashRouter : BrowserRouter

  return <Portal>{children}</Portal>
}

export default withDetect(Router, ['IE'])
