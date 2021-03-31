import React from 'react';
import Cards from './cards'
import CatagoryData from '../../../Utils/tempCatagory'

const CatagoryCards = () => {



    

    return (
        <div className="container">
            <div className="row">
            {CatagoryData.map((data, i) => (
                <Cards title={data.title} description={data.description} key={i}/>
            ))}
            </div>
            
        </div>
    )
}

export default CatagoryCards;