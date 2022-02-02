import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import "../Navbar/Navbar.scss" 

const Navbar = () => {
  return (
       <div><nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
       <div className="container">
     <Link to="/" className="fs-3 ubuntu navbar-brand " > 
      Rick <span className="text-primary  my-4"> 
         & 
      </span> Morty </Link>




         <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false"
                aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup">
           <div className="navbar-nav fs-5">
                      <NavLink activeClassName = "active"  to="/" className="nav-link active">
                             Characters
                     </NavLink>
                      <NavLink  to="/episodes" className="nav-link">
                        Episodes
                     </NavLink>
                      <NavLink to="/location" className="nav-link" >
                         Location
                     </NavLink>
                  
           </div>
         </div>
       </div>
     </nav></div>
  )
};

export default Navbar;
