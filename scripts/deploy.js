async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalence = await deployer.getBalance();

  console.log("Deploying contracts with account", deployer.address);
  console.log("Account Balence ", accountBalence.toString());

  const Token = await hre.ethers.getContractFactory("wavePortal");
  const portal = await Token.deploy();
  console.log("wavePortal Address is ", portal.address);
}
async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
runMain();