import React from 'react';
import { Link } from "react-router-dom";

function Labor() {
    return (
        <div>
            <h1>Labor</h1><br/>
            <label for="NumberOfPainters"> Number of Painters </label>
                 <input type="number"/><br/>
             <label for="EstimatedHours"> Estimated Labor Hours </label>
                 <input type="number"/><br/>
                 <br/><br/>
             <h1>Labor Notes</h1> 
             <textarea name="text" cols="25" rows="5" placeholder="Add text here!!"></textarea> <br/>
             <div>
                 <button> <Link to="/materials"> Back</Link></button>
                 <button> <Link to="/quote"> Quote</Link></button>
             </div>
 
        </div>
    )
 }
 
 export default Labor;