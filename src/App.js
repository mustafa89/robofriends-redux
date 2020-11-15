import React from 'react';
import CardList from './CardList.js'
import SearchBox from './SearchBox.js'
import Scroll from './Scroll.js'

class App extends React.Component { // --> A component that has state defined inside it is called a smart component. searchBox and Cardlist are dumb components as they have no state.
    constructor() {   // --> We initialize a class with this countructor. equivalent to __init__ dunder in python.
        super()       // --> This is required when ever we extend a class. Causes the constructor of the parent class to run first.
        this.state = {
            robots: [], // --> empty array, will be filled in by DidMount
            searchField: ''
        }
    }
    // --> Special react build in function. Executes Before render() function.
    componentDidMount() {  // --> instead of getting robot users from a file we get them from an API now
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {
            this.setState({ robots: users })
        })
    }
    onSearchChange = (event) => {       // --> Always create self defined function inside a react class like this
        this.setState({ searchField: event.target.value })  // --> We reset the state from empty to search field value
       
    }
    render() {
        const filterRobots = this.state.robots.filter((item) => {  // --> we Filter the items for the search field
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if (this.state.robots.length === 0) { // --> Add loading to page untill data is fetched
            return <h1> LOADING...</h1>
        }
        else {
           return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll> 
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
                // we pass the values of filtered items here to robots
                // --> SearchBox and CardList are components.
            );
        }
    }
}

export default App;