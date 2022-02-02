
//import React, {useState,useEffect}from "react";

import axios from 'axios';
import { useState, useEffect } from 'react';


const Episodes = () => {

const[id, setId]=useState({})
const[url,setUrl]=useState("https://rickandmortyapi.com/api/episodes/?episodes=")

useEffect(()=>{
    axios.get(`${url}`)
    .then((results)=>{
     
     console.log(results.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [])



return(
    <div className='po'>
     
        
    </div>
)




   

     






  
};

export default Episodes;




    

     

 