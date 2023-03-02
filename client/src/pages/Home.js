import { Token } from '@thirdweb-dev/sdk';
import React from 'react';
import DisplayCards from '../components/DisplayCards';
import {cards} from '../constants';


export default function Home() {

    // const [cards, setCards] = React.useState([{ heading: "ERC20 Token", description: "Create Or Manage your ERC20 token on FTM blockchain with minimal fee and seemless UI/UX", link:"/token" }, { heading: "Crowdsale", description: "Raise funds by selling a token which binds the tokenomics of your project.", link: "/crowdsale"  }, { heading: "DAO", description: "Govern together with the help of your community and our simple to use tech tools", link: "dao" }]);
    return (
        <div className='main-content'>
            {/* <h1>Governance Kit </h1>
            <p>by Equistart DAO Suite</p> */}
            <p>Now critical World problems can be solved using DAO mechanism to operate the organisations which needs transparency and decentralisation at its core. <br/>Climate, poverty, finance, media, donations and more such problems can now be solved with higher degree of efficiency with thw help of Blockchain, crypto-assets, smart-contracts, and Equistart.  </p>
            <p>And we at Equistart develop simple user friendly tools to bridge the gap between technology and users. </p>
            
            <DisplayCards
                title="DApp Features"
                cards={cards}
            />

        </div>
    );
};


// TODO: 
// Buttons:
// Create Token
// Create Sale
// Create Governance

//Cards
//Token List
//Crowdsale List
//DAO List
