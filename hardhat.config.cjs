require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.27",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // Default Ganache RPC
      accounts: [
        "0x24b44d90d5376e64c91d4990088e47469ada60dd832e643d9f621660bce15eb7",
      ], // Replace with your Ganache account private key
    },
  },
};
