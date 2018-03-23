import L from 'react-loadable'

const Loadable = opts =>
  L({
    loading: () => null,
    ...opts,
  })

export default Loadable
