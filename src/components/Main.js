import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
      <div>
        <h1>Main</h1>
        <div>
          <button>setting</button>
        </div>
        <div>
          <button>
            <Link to="/newbids"> Add New Bid </Link>
          </button>
          <h1>Add Bids</h1>
        </div>
        <h3>Search existing Bids</h3>
        <div>
          <ul>
            <li> Bid 1</li>
            <li> Bid 2</li>
            <li> Bid 3</li>
            <li> Bid 4</li>
          </ul>
        </div>
      </div>
    );
  }

export default Main;
