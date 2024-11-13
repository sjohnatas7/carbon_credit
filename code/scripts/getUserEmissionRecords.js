require("dotenv").config();
const { ethers } = require("hardhat");

const { CONTRACT_ADDRESS } = process.env;

async function main() {
    const [admin, user] = await ethers.getSigners();

    const carbonCreditSystemAddress = CONTRACT_ADDRESS;
    const CarbonCreditSystem = await ethers.getContractFactory("CarbonCreditSystem");
    const carbonCreditSystem = await CarbonCreditSystem.attach(carbonCreditSystemAddress);
    
    const userAddress = '0x81cf91b20BFa78e8830a26915d88BEEcF22Ad10e';
    // const userAddress = admin.address;

    // Call the contract function to get the user's emission records
    const emissions = await carbonCreditSystem.getUserEmissionRecords(userAddress);

    if (emissions.length === 0) {
        console.log(`No emission records found for user ${userAddress}`);
        return;
    }

    console.log("Emission data:", emissions);

    emissions.forEach((record, index) => {
        console.log(`Emission #${index + 1}:`);
        console.log(`  Emission Amount: ${ethers.formatUnits(record.emissionAmount, 18)} CO₂ tons`);
        console.log(`  Timestamp: ${record.timestamp}`);
    });

    
    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });