import React from 'react';

const Card = ({ data }) => {
    return (

        <div className="card-wraper"> 
            <img src={data.img} alt="reason" className="reason-img col" />
            <p>{data.reason}</p>
        </div>
    )
}

export default Card;