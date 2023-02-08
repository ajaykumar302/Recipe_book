import React from 'react'
import './Navbar.css'
import { auth } from "../../fairbase";
import logo from '../../assets/res-logo.png'
import {  Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();

    const handleSignOut = () =>{
        auth.signOut()
        navigate("/");
    }
  return (
    <div className='navbar'>
    <div className='nav_img'>
          <img src={logo} alt='logo' className='nav_logo' />
          <h5 className="logo_text">@k Recipes</h5>
        </div>
        
        {
          props.name ? 
          <div>
          <ul type='none' className='nav_box'>
            <li className='li'><Link to='/home' className="box_text">Home</Link></li>
            <li><Link to='/favorite'><div className="material-symbols-outlined">favorite</div></Link></li>
            <li><h4 className="nav_name">Hi! {props.name}</h4></li>
            <li> <button onClick={handleSignOut} type="button" className="btn btn-danger">LogOut</button></li>
          </ul> 
        </div>
        :
        <div className='nav_box'>
         <Link to='/'><button type="button" class="btn btn-primary">Login</button></Link> 
         <Link to='/signup'><button type="button" class="btn btn-info">Signup</button></Link> 
        </div>
        }
        

    </div>
  )
}

export default Navbar