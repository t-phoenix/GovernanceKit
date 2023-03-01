import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';



export default function Navbar(){
    return(
        <div className='navbar'>
            <p> This is Nav bar</p>
            {/* <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
            </Link> */}
        </div>
    )
}