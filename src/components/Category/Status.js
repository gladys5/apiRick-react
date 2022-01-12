import React from 'react'
import Button from './Button'

const Status = ({setStatus,setPageNumber}) => {
    let Status=["Alive","Dead","Unknow"]
    return (
        <>  
          <button>
            Status
          </button>
          <div className='acordion d-flex flex-wrap gap-3'>
            {Status.map((items,index)=>(  
             <Button
               task={setStatus}
              setPageNumber={setPageNumber} 
               key={index}name='status'
               index={index} items={items}/>
           ))}
          </div>
           <div></div>
        </>
    )
}

export default Status
