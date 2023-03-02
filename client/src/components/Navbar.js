import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.svg';
import { ConnectWallet } from "@thirdweb-dev/react";




export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='title-container'>
            <h3 className='title'>Governance Kit</h3>
            <p className='icon-title'>by Eqiustart</p>
            </div>
            {/* <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
            </Link> */}
            <ConnectWallet accentColor="#ffffff" />
        </div>
    )
}