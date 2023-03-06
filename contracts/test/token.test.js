

const hre = require('hardhat');

describe('TokenFactory', async function(){
    // const tokenFactory = await ethers.getContractFactory("TokenFactory");
    // const factoryAddr = "0x9BbBDc65F4E445861A7398ea3441A8F29A39220f"; ftm-testnet
    const factoryAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const [deployer] = await hre.ethers.getSigners();
    const TOKEN_NAME = "Equistart";
    const TOKEN_SYMBOL = "EQST";
    const TOKEN_SUPPLY = 1000;

    const factoryContract = hre.ethers.getContractAt(factoryAddr);

    it('should check deployed address and balance', async function(){
        console.log("Testing contracts with the account:", deployer.address);
        console.log("Account balance:", (await deployer.getBalance()).toString());
        console.log("Token Factory Contract: ", factoryContract);
    })
    it('should create new tokens using factory',  async function(){
        const result = await factoryContract.createProject(TOKEN_NAME, TOKEN_SYMBOL, TOKEN_SUPPLY, deployer, {value: 1000000000000000 } )
        console.log("Creating Token: ", result);
    })
    
    
})
