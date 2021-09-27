async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("wavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Deployed Contract Address is", waveContract.address);
  console.log("Deployed by", owner.address);
  let waveCount;
  waveCount = await waveContract.getTotalWaveCount();
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaveCount();
  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();
  waveCount = await waveContract.getTotalWaveCount();
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
