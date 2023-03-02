import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'token',
    imgUrl: payment,
    link: '/token',

  },
  {
    name: 'crowdsale',
    imgUrl: withdraw,
    link: '/crowdsale',
  },
  {
    name: 'DAO',
    imgUrl: createCampaign,
    link: '/dao',
  },

  // {
  //   name: 'profile',
  //   imgUrl: profile,
  //   link: '/profile',
  // },
  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
  //   disabled: true,
  // },
];


export const cards = [
  { 
    heading: "ERC20 Token", 
    description: "Create Or Manage your ERC20 token on FTM blockchain with minimal fee and seemless UI/UX", 
    status: "live",
    link: "/token" 
  }, 
  { 
    heading: "Crowdsale", 
    description: "Raise funds by selling a token which binds the tokenomics of your project.", 
    status: "coming soon",
    link: "/crowdsale",
  }, 
  { 
    heading: "DAO", 
    description: "Govern together with the help of your community and our simple to use tech tools", 
    status: "coming soon",
    link: "dao" 
  }
]

export const tokens = [
  {
    name: "test token",
    symbol: "TST",
    tokenSupply: "100000000",
    owner: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F"
  },
  {
    name: "Governance kit token",
    symbol: "GKT",
    tokenSupply: "5240000000",
    owner: "0x31066E71b4B70b555a75A2C1xuwebxybe873gx8eb"
  }
]


export const sale =[
  {
    token: "My new TOKEN",
    rate: 200,
    beneficiary: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F"
  },
  {
    token: "Equistart",
    rate: 5000,
    beneficiary: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F"
  }
]

export const daos = [
  {
    name: "Humans Governance",
    tokenAddress: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F",
    governorAddress: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F",
    timelockAddress: "0xAE0a1eA3509E8109d1F21fDeD172Ab330F99f004"
  },
  {
    name: "Governance Kit DAO",
    tokenAddress: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F",
    governorAddress: "0x31066E71b4B70b555a75A2C12A6658F95ABf2C6F",
    timelockAddress: "0xAE0a1eA3509E8109d1F21fDeD172Ab330F99f004"
  }
]

export const proposals = [
  {
    id: '0xAE0a1eA3509E8109d1F21fDeD172Ab330F99f004',
    start: 14187241,
    end: 14232143,
    status: 'success',
    description: "This is a test proposal",
  },
  {
    id: '0x942a59f7b182a8942e09f4696da0b08c7219e739111b6c6f6ed39c7705713228',
    start: 15387241,
    end: 16432143,
    status: 'defeated',
    description: "Fund 500 tokens for Marketing ",
  }
] 