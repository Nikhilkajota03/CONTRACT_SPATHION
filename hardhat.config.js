require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.20",
  networks: {
     Sepolia: {
      url:"https://arbitrum-one.blastapi.io/a3700f0f-b00f-4304-bf13-ed457ca5354a",
      accounts: ["60280e6e0cbca9c0896e714f339710980ef97b87d7a8854a544cbe15cabb757c"],
    },
  },
};
