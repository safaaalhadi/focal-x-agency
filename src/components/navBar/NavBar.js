import React from "react";
import {Container, Row} from "reactstrap";
import style from "./NavBar.module.css";
import {Link} from 'react-router-dom';
const NavBar = () => {
 
  return(
    <nav className={style.nav}>
     
    <Container fluid>
    <Row className="m-0">
   <div className="col-md-7 col-sm-12 mb-4">
   <div className={style.navImg} >
    <img  src={require('../img/img.svg').default}  alt="logo"/>
     <p className={style.link}>Go Home</p>
      </div>
   </div>
   <div className="col-md-2 col-sm-12"></div>
      <div className="col-md-3 col-sm-12">
      <Link to="add" className={style.navlink}>+</Link>
      <Link to="user"className={style.navedit}>edit</Link>
      </div>
      </Row>
    </Container>
  </nav>
  )
};

export default NavBar;
