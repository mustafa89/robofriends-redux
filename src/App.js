import React from 'react';
import CardList from './CardList.js'
import { robots } from './robots.js'
import SearchBox from './SearchBox.js'

class App extends React.Component { // --> A component that has state defined inside it is called a smart component. searchBox and Cardlist are dumb components as they have no state.
    constructor() {   // --> We initialize a class with this countructor. equivalent to __init__ dunder in python.
        super()       // --> This is required when ever we extend a class. Causes the constructor of the parent class to run first.
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {       // --> Always create self defined function inside a react class like this
        this.setState({ searchField: event.target.value })  // --> We reset the state from empty to search field value
       
    }
    render() {
        const filterRobots = this.state.robots.filter((item) => {  // --> we Filter the items for the search field
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>   
                <CardList robots={filterRobots}/>
            </div>
              // we pass the values of filtered items here to robots
              // --> SearchBox and CardList are components.
        );
    }
}

export default App;