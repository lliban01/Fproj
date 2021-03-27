import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link
          to="/"
          className={
              window.location.pathname === "/" || window.location.pathname === "/Home" ? "nav-link" : "nav-link"}
        >
          Home
        </Link>
      </li> 
      <li className="nav-item">
        <Link
          to="/labor"
          className={
            window.location.pathname === "/labor" ? "nav-link" : "nav-link"}
        >
          Labor
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/main"
          className={
            window.location.pathname === "/main" ? "nav-link" : "nav-link"}
        >
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/materials"
          className={
            window.location.pathname === "/materials" ? "nav-link" : "nav-link"}
        >
          Materials
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/newbids"
          className={
            window.location.pathname === "/newbids" ? "nav-link" : "nav-link"}
        >
          New Bids
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/oldbids"
          className={
            window.location.pathname === "/oldbids" ? "nav-link" : "nav-link"}
        >
          Old Bids
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/paint"
          className={
            window.location.pathname === "/paint" ? "nav-link" : "nav-link"}
        >
          Paint
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/quote"
          className={
            window.location.pathname === "/quote" ? "nav-link" : "nav-link"}
        >
          Quote
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;