import React from 'react'

const Button = ({name, index, items, task, setPageNumber}) => {
    return (
        <>
        <style jsx>
          {`
            .x:checked + label{
              background-color:#0b5ed7;
              color:white;
            }

          input[type="radio"]{
            display:none;
          }`}

        </style>
        
 


            <div className="form-check">
               <input className="form-check-input x"   onClick={()=>{
                   setPageNumber(1);
                   task(items);
               }} type="radio" name={name}
                id={`${name}-${index}`}
               
               
               
               />
                 <label className='btn btn-uotline-primary' htmlFor={`${name}-${index}`} >{items}</label> 
            </div>
           
           
       </>    
        
    )
}

export default Button
