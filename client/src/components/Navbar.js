import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.svg';
import { ConnectWallet } from "@thirdweb-dev/react";




export default function Navbar(){
    return(
        <div className='navbar'>
            <h3>Governance Kit</h3>
            {/* <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
            </Link> */}
            <ConnectWallet accentColor="#FFFF32" />
        </div>
    )
}