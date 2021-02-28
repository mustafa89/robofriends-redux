import React from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'
import { setSearchField, requestRobots } from '../actions.js'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
    onSearchChange: event => {
        dispatch(setSearchField(event.target.value))
    },
    onrequestRobots: () => {
        dispatch(requestRobots())
    }
}
}

class App extends React.Component { 

    componentDidMount() {  
        this.props.onrequestRobots();
    }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filterRobots = robots.filter((item) => { 
            return item.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
            <h1> LOADING...</h1> : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary> 
                            <CardList robots={filterRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }


    export default connect(mapStateToProps, mapDispatchToProps)(App)