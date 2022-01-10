import React from 'react'

 const Search = ({setSearch,setPageNumber}) => {
        let searchBtn=(e)=>{
            e.preventDefault()
        };
         return (
           
             <form  className="d-flex flex-sm-row flex-column alingn-items-center justify-content-center gap-4 s">
                     <input 
                       onChange={(e)=>{
                        setPageNumber(1);
                        setSearch(e.target.value);
                       }} 
                         placeholder="Search for Character"
                       type="text"className='input' 
                     />
                    <button onClick={searchBtn}
                    className='btn btn-primary'>Search</button>

             </form>
             
        

    );
   
};

export default Search;
