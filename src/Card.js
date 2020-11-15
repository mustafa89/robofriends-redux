import React from 'react';

const Card = ({ name, email, id }) => {
   
    return (
        <div className="bg-light-green dib pa3 ma2 tc br2 shadow-5 grow bw3 ">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
            <div>
                 <h2>{name}</h2>
                <p>{email}</p>   
            </div>    
        </div>
    );
}

export default Card;