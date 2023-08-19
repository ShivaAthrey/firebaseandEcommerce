import React from 'react';
import '../styles/navbar.css';
import { useUserContext } from "../context/userContext";

const Navbar = ({size, setShow}) => {
    const { user, logoutUser } = useUserContext();
  return (
    
    
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <span>{user.displayName}</span>
            <span>{user.email}</span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="cart fas fa-cart-plus">Cart</i>
                </span>
                <span className='cart'>{size}</span>
                
            </div>
            <button className='button' onClick={logoutUser}>Logout</button>
            </div>
            
        
    
  )
}

export default Navbar