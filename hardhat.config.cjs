require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.27",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // Default Ganache RPC
      accounts: [
        "0x3f5ff957f664cfaa2f669fecb1a40974eaba561d6f7ac36c3eaa6131caae40ab",
      ], // Replace with your Ganache account private key
    },
  },
};
