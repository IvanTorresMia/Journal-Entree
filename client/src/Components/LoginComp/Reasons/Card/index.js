import React from 'react';

const Card = ({ data }) => {
    return (

        <div> 
            <img src={data.img} alt="reason" className="reason-img" />
            <p>{data.reason}</p>
        </div>
    )
}

export default Card;