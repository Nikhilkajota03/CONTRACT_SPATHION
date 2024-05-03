// deployLendingPool.js
const { ethers } = require("hardhat");

async function main() {
    const LendingPool = await ethers.getContractFactory("LendingPool");
    const dummyERC20Address = "0x123..."; // Provide the address of the deployed DummyERC20 contract
    const lendingPoolContract = await LendingPool.deploy(dummyERC20Address);
    await lendingPoolContract.deployed();
    console.log("LendingPool contract address:", lendingPoolContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
