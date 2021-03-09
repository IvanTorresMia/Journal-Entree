import React from 'react';
import Card from './Card'
import data from '../../../Utils/Reasons'


const Reasons = () => {

    return (
        <div>
            {data.map((reason, i) => (
                <Card data={reason} key={i}/>
            ))}
        </div>
    )
}

export default Reasons;