const { ethers } = require("hardhat");

async function deployContract(name, args, label, options) {
    let info = name;
    if (label) { info = `${name}:${label}`; }  // Corrected template literal syntax
    const contractFactory = await ethers.getContractFactory(name);
    let contract;
    if (options) {
        contract = await contractFactory.deploy(...args, options);
    } else {
        contract = await contractFactory.deploy(...args);
    }
    const argStr = args.join(" ");  // Simplified for clarity, ensure args can be stringified
    console.info(`Deploying ${info} at ${contract.address} with args ${argStr}`);
    await contract.deployed();  // Changed to .deployed() which also waits for the contract to be mined
    console.info("... Completed!");
    return contract;
}

async function main() {
    let token = await deployContract("DummyERC20", ["SPATHION", "SPATH", 1000000000 ]);
    console.log(token.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
