import React from 'react'
import Button from './Button'

const Species = ({setPageNumber, setSpecies}) => {
    let species=[
        "Human",
        "Alien",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    return (
        <>   
        <button>
            Species
        </button>
        <div className='acordion d-flex flex-wrap gap-3'>
        {species.map((items,index)=>(  
         <Button 
            setPageNumber={setPageNumber}
           task={setSpecies} 
           key={index}name='species'
           index={index} 
           items={items}
         />
     ))}
    </div>
    </>
    )
}

export default Species
