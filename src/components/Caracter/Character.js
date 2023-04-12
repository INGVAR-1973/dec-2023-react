import React from 'react';

const Character = (props) => {
    return (
        <div>
            <div>{props.person.id}</div>
            <div>{props.person.name}</div>
            <div>{props.person.status}</div>
            <div>{props.person.species}</div>
            <div>{props.person.gender}</div>
            <img src={props.person.image}/>

        </div>
    );
};

export default Character;