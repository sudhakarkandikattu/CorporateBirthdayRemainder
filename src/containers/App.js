import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {colleagues} from '../colleagues'
class App extends Component {
  constructor() {
    super()
    this.state = {
      colleagues: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({colleagues: colleagues})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { colleagues, searchfield } = this.state;
    const filteredColleagues = colleagues.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !colleagues.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Birthday List</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList colleagues={filteredColleagues} />
          </Scroll>
        </div>
      );
  }
}

export default App;