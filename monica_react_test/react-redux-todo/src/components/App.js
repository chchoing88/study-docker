// import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../screens/AddTodo'
// import VisibleTodoList from '../screens/VisibleTodoList'
//
// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )
//
// export default App

import React, {Component} from 'react';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

// create-react-app specific

const FRAMEWORKS = ['React', 'Angular', 'Vue', 'Ember'];

// ACTION CREATORS
function setFilter(by) {
  return {type: 'SET_FILTER', by};
}

// REDUCER
// 현재 상태를 가지고 액션에 따라 새로운 state를 반환함.
const initialState = {
  filterBy: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      console.log(`Our filter was ${state.filterBy} but is now ${action.by}!`);
      // return a new object
      return Object.assign({}, state, {
        filterBy: action.by
      })
    default:
      return state
  }
}

// STORE
const store = createStore(reducer);

// react-redux
const mapStateToProps = (state) => {
  return {
    filterBy: state.filterBy
  }
}

//dispatcher를 컴포넌트 props에 매핑
const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (ev) => dispatch(setFilter(ev.target.value))
  }
}
// ------- smart component -----------
class FilterList extends Component {

  constructor() {
    super();
    //our default state, filter by nothing
    this.state = {
      filterBy: ''
    };
  }
  updateFilter(ev) {
    this.setState({filterBy: ev.target.value});
  }

  render() {
    const {filterBy} = this.state;
    const frameworks = ['React', 'Angular', 'Vue', 'Ember'];
    // simple input box and our List component
    return (
      <div>
        <input type="text" onChange={(ev) => this.updateFilter(ev) }/>
        <List items={frameworks} filterBy={filterBy}/>
      </div>
    )
  }

  // render() {
  //   const {filterBy, updateFilter} = this.props;
  //   return (
  //     <div>
  //       <input type="text" onChange={updateFilter}/>
  //       <List items={FRAMEWORKS} filterBy={filterBy}/>
  //     </div>
  //   )
}

// very important!
FilterList = connect(mapStateToProps, mapDispatchToProps)(FilterList);

const List = ({items, filterBy}) => {
  return (
    <ul>
      {
        items
          .filter(item => item.indexOf(filterBy) > -1)
          .map((item, i) => <li key={i}>{item}</li>)
      }
    </ul>
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <FilterList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;