import React from 'react';
import { Link } from "react-router-dom";
import "./CSS/theme.css"


function Newbids() {
  return (
    <div>
      <div className="container">
        <h1>Client Name</h1>
        <input placeholder="John Doe" />
        <br />
        <br />
        <h1>Address</h1>
        <input placeholder="123 Main St. City, State 12345" />
        <br />
        <h1>Client Email</h1>
        <input placeholder="user@email.com" />
        <div>
          <button>
            {" "}
            <Link to="/main"> Back</Link>
          </button>
          <button>
            {" "}
            <Link to="/paint"> Paint</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newbids;
