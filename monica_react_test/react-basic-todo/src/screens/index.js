import Loadable from '../components/Loadable'

export const asyncHome = Loadable({
  loader: () => import('./Home'),
})

export const asyncTodos = Loadable({
  loader: () => import('./Todos'),
})
