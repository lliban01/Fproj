import React from 'react';
import { Link } from "react-router-dom";
import "./CSS/theme.css"


function Materials() {
    return (
        <div>
            <h1>Materials</h1>   
            <label for="MaskingPastic"> Masking Plastic </label>
                 <input type="number"/><br/>
             <label for="MaskingPaper"> Masking Paper </label>
                 <input type="number"/><br/>
             <label for="Tape"> Tape </label>
                 <input type="number"/><br/>
             <label for="Caulking">Caulking </label>
                 <input type="number"/><br/>
             <label for="Primer"> Primer </label>
                 <input type="number"/><br/><br/>
 
             <div>
                 <button> <Link to="/paint"> Back</Link></button>
                 <button> <Link to="/labor"> Labor</Link></button>
             </div>
 
 
        </div>
    )
 }
 
 export default Materials;
