import React from 'react'

const Button = ({name, index, items, task, setPageNumber}) => {
    return (
        
            <div className='class-btn'>
               <input  onClick={()=>{
                   setPageNumber(1);
                   task(items);
               }} type="radio" name={name} id={`${name}-${index}`}
               
               
               
               />
                 <label className='btn btn-uotline-primary'htmlfor={`${name}-${index}`} >{items}</label> 
            </div>
           
           
           
        
    )
}

export default Button
