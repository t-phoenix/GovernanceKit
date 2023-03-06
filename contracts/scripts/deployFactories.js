

const hre = require('hardhat');

// const TOKEN_NAME = "Equistart";
// const TOKEN_SYMBOL = "EQST";
// const TOKEN_SUPPLY=1000;
const OWNER = "0x54Ef677f7F03fe09e9878Ee7DF4E9D815225df1C"; //fantom-wallet

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());


    const TOKEN_FACTORY = await hre.ethers.getContractFactory('TokenFactory');
    const token_factory = await TOKEN_FACTORY.deploy()

    console.log("TOKEN FACTORY: ", token_factory.address);


    // const CROWDSALE_FACTORY = await hre.ethers.getContractFactory('CrowdsaleFactory');
    // const crowdsale_factory = await CROWDSALE_FACTORY.deploy()

    // console.log("Crowdsale Factory: ", crowdsale_factory.address);


    // const TIMELOCK_FACTORY = await hre.ethers.getContractFactory('TimelockFactory');
    // const timelock_factory = await TIMELOCK_FACTORY.deploy()

    // console.log("Timelock Factory: ", timelock_factory.address);


    // const GOVERNOR_FACTORY = await hre.ethers.getContractFactory('GovernorFactory');
    // const governor_factory = await GOVERNOR_FACTORY.deploy()

    // console.log("Governor Factory: ", governor_factory.address);




    // const Token = await hre.ethers.getContractFactory('ERC20Token')
    // const token = await Token.deploy(TOKEN_NAME, TOKEN_SYMBOL, TOKEN_SUPPLY, OWNER );

    // console.log("Token Address:", token.address);


}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });