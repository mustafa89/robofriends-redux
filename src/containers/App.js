import React from 'react';
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'

class App extends React.Component { // --> A component that has state defined inside it is called a smart component. searchBox and Cardlist are dumb components as they have no state.
    constructor() {   // --> We initialize a class with this countructor. equivalent to __init__ dunder in python.
        super()       // --> This is required when ever we extend a class. Causes the constructor of the parent class to run first.
        this.state = {
            robots: [], // --> empty array, will be filled in by DidMount
            searchField: ''
        }
    }
    // --> Special react built-in function. Executes Before render() function.
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
        return !this.state.robots.length ? // --> Add loading to page untill data is fetched. If robots.length is zero return loading, else components.
            <h1> LOADING...</h1> : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary> 
                            <CardList robots={filterRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                // we pass the values of filtered items here to robots
                // --> SearchBox and CardList are components.
                // --> If anything in the Cardlist fails Errorboundary will catch it and it won't cause the whole app to break.
                // --> only the component will fail. The h1 tag will only be visible in production mode.
            );
        }
    }


export default App;
