import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="...">
          <Link to="/">  Charito Store</Link> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="...">
                Inicio
              </a>
              <a className="nav-link" href="...">
              <Link to="/category/1">  Damas</Link>   
              </a>
              <a className="nav-link" href="..">
              <Link to="/category/2">  Caballeros</Link>   

              </a>
              <a className="nav-link" href="..">
              <Link to="/category/3">  Niños</Link>   

              </a>
             
            </div>
            <Link to="/cart"> <BsFillCartFill /> </Link>
          </div>
       
        </div>
      </nav>
    </>
  );
};

export default NavBar;
