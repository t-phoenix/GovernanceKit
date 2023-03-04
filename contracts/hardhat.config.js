require("@nomicfoundation/hardhat-toolbox");

const GOERLI_PRIVATE_KEY = "0x5f23ac6245af778ecd6402937880e330f27ddcfc313f8f48806e143c6b16d5f7";
const FANTOM_PRIVATE_KEY = "0x5f23ac6245af778ecd6402937880e330f27ddcfc313f8f48806e143c6b16d5f7";
const OPERA_PRIVATE_KEY = "0x5f23ac6245af778ecd6402937880e330f27ddcfc313f8f48806e143c6b16d5f7";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "fantom_testnet",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      accounts: [GOERLI_PRIVATE_KEY]
    },
    fantom_mainnet: {
      url: "https://rpc.ankr.com/fantom",
      accounts: [FANTOM_PRIVATE_KEY]
    },
    fantom_testnet: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: [OPERA_PRIVATE_KEY]
    }
  },
  solidity:{
    version:  "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
