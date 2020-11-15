import React from 'react';
import Card from './Card.js'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((users, i) => {
                    return (
                        <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                    );
                })
        }
        </div>
    );
};
export default CardList;

//id={robots[0].id}
    //name={robots[0].name}
    //email={robots[0].email}