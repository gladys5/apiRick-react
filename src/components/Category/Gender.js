import React from 'react'
import Button from './Button'

const Gender = ({setPageNumber, setGender}) => {
     
     let genders = ["female", " male", "genderless", "unKnown"];

    return (
          
 <div className="accordion-item">
    <h2 className="accordion-header"
     id="headingOne">
      <button
          className="accordion-button"
          type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
          Gender
      </button>
    </h2>
        <div id="collapseOne" 
            className="accordion-collapse collapse show" 
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body accordion-body d-flex flex-wrap gap-3 ">
           
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
               
        
        </div>
  </div>

        
    )  
}

export default Gender
