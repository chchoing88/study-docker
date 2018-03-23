import React from 'react'
import Footer from './Footer'
import AddTodo from '../screens/AddTodo'
import VisibleTodoList from '../screens/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
