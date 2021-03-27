import React from 'react';
import { Link } from "react-router-dom";

function Quote() {
    return (
        <div>
             <h1>Quote</h1>
             <label for="FinalPaintCost"> Final Paint Cost <span>$</span></label>
                 <input value="1000.00"/><br/>
             <label for="FinalMaterialsCost"> Final Materials Cost <span>$</span></label>
                 <input value="1000.00"/><br/>
             <label for="FinalLaborCost"> Final Labor Cost <span>$</span></label>
                 <input value="1000.00"/><br/>
             <label for="Markup"> Mark-up (Profit) <span>$</span></label>
                 <input value="1000.00"/><br/>
 
             <h3>Final Quote :  <span>$4,000.00</span> </h3> <br/><br/>
             <div>
                 <button> <Link to="/labor"> Back</Link></button>
                 <button> <Link to="/main"> Finish</Link></button>
             </div>
            
        </div>
    )
    
 }
 
 export default Quote;
