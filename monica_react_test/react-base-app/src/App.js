import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      dataList: []
    };
  }
  // 이 안에서 다른 Javascript 프레임워크를 연동하거나, setTimeout, setInterval 및 ajax 등을 처리
  componentDidMount() {
    this.getApi()
      .then(res => this.setState({ dataList: res }))
      .catch(err => console.log(err));
  }

  getApi= async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    let retdata = this.state.dataList.map((data) => {
      return data.msg;
    });

    return (
      <div>
        <h1>Hello This is App</h1>
        {retdata}
      </div>
    );
  }
}

export default App;