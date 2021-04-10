// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const AhojV1Factory = await hre.ethers.getContractFactory("AhojV1Factory");
  const ahojV1Factory = await AhojV1Factory.deploy("0x0000000000000000000000000000000000000000");

  await ahojV1Factory.deployed();

  console.log("Ahoj V1 Factory deployed to:", ahojV1Factory.address);

  const AhojV1Router = await hre.ethers.getContractFactory("AhojV1Router");
  const ahojV1Router = await AhojV1Router.deploy(ahojV1Factory.address, "0xd00ae08403b9bbb9124bb305c09058e32c39a48c");

  await ahojV1Router.deployed();

  console.log("Ahoj V1 Router deployed to:", ahojV1Factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });