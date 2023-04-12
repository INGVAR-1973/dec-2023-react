import React from 'react';

const Simpson = ({simpson}) => {
    return (
        <div>
            <h2>{simpson.name}</h2>
            <div>{simpson.surname}</div>
            <div>{simpson.age}</div>
          <div>{simpson.info}</div>
          <img src={simpson.photo} />

</div>
    )
};

export default Simpson;