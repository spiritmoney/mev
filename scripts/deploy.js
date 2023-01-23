// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const config = require('../../HardhatBOT/config.json')



async function main() {

  const Arbitrage = await hre.ethers.getContractFactory("Arbitrage");
  const arb = await Arbitrage.deploy(config.SUSHISWAP.V2_ROUTER_02_ADDRESS, config.UNISWAP.V2_ROUTER_02_ADDRESS);

  await arb.deployed();

  console.log(
    `Arbitrage Contract deployed to ${arb.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
