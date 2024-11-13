const { ethers } = require("hardhat");

require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
    const [admin, user] = await ethers.getSigners(); // Define a conta admin e uma conta de usuário para o teste

    const carbonCreditSystemAddress = CONTRACT_ADDRESS; // Coloque o endereço do contrato aqui
    const CarbonCreditSystem = await ethers.getContractFactory("CarbonCreditSystem");
    const carbonCreditSystem = await CarbonCreditSystem.attach(carbonCreditSystemAddress);

    const emissionAmount = ethers.parseUnits("10", 18); // Exemplo: 10 toneladas de CO₂
    const userAddress = '0x81cf91b20BFa78e8830a26915d88BEEcF22Ad10e'
    const tx = await carbonCreditSystem.connect(admin).recordEmission(userAddress, emissionAmount);
    await tx.wait();

    console.log(`Emissão de ${ethers.formatUnits(emissionAmount, 18)} registrada para o usuário ${userAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
