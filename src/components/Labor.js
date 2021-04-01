import React from 'react';
import { Link } from "react-router-dom";
import "./CSS/theme.css"

function Labor() {
    return (
        <div>
            <div className="container">

            <h1>Labor</h1><br/>
            <div id="painter">
                <label class="myLabel" for="NumberOfPainters"> Number of Painters </label>
                <input class="numInput" type="number"/><br/>
            </div><br/>
            <div id="estimates">
                <label class="myLabel" for="EstimatedHours"> Estimated Labor Hours  </label>
                <input class="numInput" type="number"/><br/>
            </div>
                 
             <h1>Labor Notes</h1> 
             <textarea name="text" cols="25" rows="5" placeholder="Add text here!!"></textarea> <br/>
             <div>
                 <button> <Link to="/materials"> Back</Link></button>
                 <button> <Link to="/quote"> Quote</Link></button>
             </div>
 
            </div>
        </div>
    )
 }
 
 export default Labor;