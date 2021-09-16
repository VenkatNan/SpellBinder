import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
// import { useState} from "react";

const Characters = (props) => {


    return (
        
        <div>
            <h1>Characters</h1>
            <section>
            {props.character.map((char) => (
                <div> 
                 <div className="card">
                     
                 <Link to={`/users/details/${char.name}`}>
                   
                   <div className="card-image">
                     <img src={char.img} alt={char.name} />
                   </div>

                  
                   <div className="card-title">
                     <h3>{char.name}</h3>
                   </div>
                   </Link>
                 </div>
                 
               
               </div>
               
                ))
            }
        </section>
        </div>
    )
}

export default Characters
