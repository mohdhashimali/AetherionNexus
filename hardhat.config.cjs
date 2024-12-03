require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.27",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // Default Ganache RPC
      accounts: [
        "0xb2dd4fe6f6ad88413ef9455e383a6e1640d63e78b1a5f32c99c8b15bc966e3ef",
      ], // Replace with your Ganache account private key
    },
  },
};
