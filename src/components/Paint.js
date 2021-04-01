import React from 'react';
import { Link } from "react-router-dom";
import "./CSS/theme.css"

function Paint() {
    return (
        <div>
            <div className="container">

            <h1>Paint Quality</h1>
            <select  name="Paint Quality">
                 <option value="Affordable"> Affordable </option>
                 <option value="Standard">Standard</option>
                 <option value="Premium">Premium</option>
             </select><br/><br/>
             <h1>Paint Notes</h1> 
             <textarea name="text"  placeholder="Add text here!!"></textarea><br/><br/>
             <h1> Sq Ft of House</h1>
             <input placeholder="1500 sq ft"></input> <br/><br/>
 
             <div>
                 <button> <Link to="/newbids"> Back</Link></button>
                 <button> <Link to="/materials"> Materials</Link></button>
             </div>
             
            </div>
        </div>
    )
 }
 
 export default Paint;