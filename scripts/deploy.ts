import {ethers} from 'hardhat';
async function main() {
    const initialSupply = ethers.parseUnits('1000000', 18); 
    const TahkToken = await ethers.deployContract('TAHKToken', [initialSupply]);
    await TahkToken.waitForDeployment();
    console.log(`TAHKToken deployed to: ${TahkToken.target}`);
}
main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
})