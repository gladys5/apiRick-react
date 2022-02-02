import React from 'react'
import "./Search.scss"

 const Search = ({setSearch,setPageNumber}) => {
        let searchBtn=(e)=>{
            e.preventDefault()
        };
         return (
           
             <form  className=" d-flex justify-content-center gap-4 mb-5 ">
                     <input className=""  
                       onChange={(e)=>{
                        setPageNumber(1);
                        setSearch(e.target.value);
                       }} 
                         placeholder="Search for Character " 
                       type="text" className="input"
                     />
                    <button onClick={searchBtn}
                    className='btn btn-primary fs-5'>Search</button>

             </form>
             
        

    );
   
};

export default Search;
