import React from 'react'
//import Button from '../Category/Button'
import Gender from '../Category/Gender'
import Species from '../Category/Species'
import Status from '../Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
     let clear=()=>{
          setStatus("");
          setSpecies("");
          setGender("");
          setPageNumber("");
     };
    return(    
           
        <div className='col-3'>
              <div>
                 <div className='text-center fw-bold fs-4 mb-4'>Filters</div> 
             </div>
                 <div onClick={clear} style={{cursor : "pointer"}}
                      className='text-center text-decoration-underline'>Clear Filters
                 </div>
                 <Gender setGender={setGender}setPageNumber={setPageNumber}/>
                 <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                 <Status setPageNumber={setPageNumber}setStatus={setStatus}/>
       </div>    
     )       
    
} 

export default Filters
