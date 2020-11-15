import React from "react"


// --> props.children is a property that all components readity inherit.
// --> Even if no props are passed to the component it will still contain ClassList
// --> as a child component. Then what we do is, we wrap the child component of Scroll
// --> in CSS (in JSX format) to allow it to overflow the card list on scroll.

// --> Scroll is a div that containes the CardList div. And we make the cardlist to scroll inside
// --> this Scroll div.
const Scroll = (props) => {
    return(
        // --> Below we add CSS in JSX syntax. For JSX we must convert the CSS to camelCase
        // --> in css : overflow-y in JSX it becomes overflowY
        <div style={{ overflowY: 'scroll', scrollbarWidth: '0', height: '800px'}}> 
            {props.children}
        </div>
    )
};

export default Scroll;