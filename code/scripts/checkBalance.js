require("dotenv").config();
const { ethers } = require("hardhat");

const { CONTRACT_ADDRESS } = process.env;

async function main() {
    const [admin] = await ethers.getSigners(); // Define a conta admin e uma conta de usuário para o teste

    if (!CONTRACT_ADDRESS) {
        throw new Error("CONTRACT_ADDRESS is not defined in the .env file");
    }

    const carbonCreditSystemAddress = CONTRACT_ADDRESS;
    const CarbonCreditSystem = await ethers.getContractFactory("CarbonCreditSystem");
    const carbonCreditSystem = await CarbonCreditSystem.attach(carbonCreditSystemAddress);

    // Obtém o saldo do usuário
    const balance = await carbonCreditSystem.balanceOf(admin);

    console.log(`Saldo de créditos de carbono para o usuário ${admin.address}: ${ethers.formatUnits(balance, 18)}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });