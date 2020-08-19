import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: ['Bunga', 'Hewan'],
      type: [],
      title: []
    };
    this.handleChangeChoose = this.handleChangeChoose.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }

  handleChangeChoose(e) {
    const { name, value } = e.target;
    if (value === "Bunga") {
      this.setState({
        type : ['Mawar', 'Melati']
      })
    }
    else if (value === "Hewan") {
      this.setState({
        type : ['Kucing', 'Anjing']
      })
    }
    this.setState({
      title : []
    })
  }

  handleChangeType(e) {
    const { name, value } = e.target;
    if (value === "Mawar") {
      this.setState({
        title : ['Mawar Biru', 'Mawar Merah']
      })
    }
    else if (value === "Melati") {
      this.setState({
        title : ['Melati Biru', 'Melati Merah']
      })
    }
    else if (value === "Kucing") {
      this.setState({
        title : ['Kucing Oren', 'Kucing Hitam']
      })
    }
    else if (value === "Anjing") {
      this.setState({
        title : ['Anjing Oren', 'Anjing Hitam']
      })
    }
  }


  render () {
    let i = 0
    
    return (
      <div>
        <label>Choose</label>
        <select onChange={this.handleChangeChoose}>
          <option></option>
          {
            this.state.choose.map(data => (
                <option key={i++} value={data}>{data}</option>
            ))
          }
        </select>
        <label>type</label>
        <select onChange={this.handleChangeType}>
          <option></option>
          {
            this.state.type.map(data => (
                <option key={i++} value={data}>{data}</option>
            ))
          }
        </select>
        <label>Title</label>
        <select>
          <option></option>
          {
            this.state.title.map(data => (
                <option key={i++} value={data}>{data}</option>
            ))
          }
        </select>
      </div>
    );
  }
}

export default App;
