import React from 'react'
import Button from './Button'

const Gender = ({setPageNumber, setGender}) => {
     
     let genders = ["female", " male", "genderless", "unKnown"];

    return (
          <>   
            <button>Gender</button>
           <div className='conection d-flex flex-wrap gap-3'> 
               {genders.map((items,index)=>(
              <Button
                 task={setGender}
                 setPageNumber={setPageNumber} 
                 key={index}
                  name="gender"
                 index={index} 
                 items={items}
               />

              ))}
          </div>
       
        </>
    )  
}

export default Gender
