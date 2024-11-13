const { v4: uuidv4 } = require('uuid');
require("dotenv").config();
const { ethers } = require("hardhat");

const { CONTRACT_ADDRESS } = process.env;

async function main() {
    const [admin] = await ethers.getSigners(); // Conta do administrador

    // Verifique se o endereço do contrato foi configurado
    if (!CONTRACT_ADDRESS) {
        throw new Error("CONTRACT_ADDRESS não foi definido no arquivo .env.");
    }

    // Crie uma instância do contrato
    const CarbonCreditSystem = await ethers.getContractFactory("CarbonCreditSystem");
    const carbonCreditSystem = await CarbonCreditSystem.attach(CONTRACT_ADDRESS);
    
    const wallet = ethers.Wallet.createRandom();

    // Obtém o endereço Ethereum e a chave privada
    const userAddress = wallet.address;

    const userId = "user123"; // Defina um ID único para o usuário

    // Chame a função registerUser com a conta do administrador
    const tx = await carbonCreditSystem.connect(admin).registerUser(userAddress, userId);
    await tx.wait();

    console.log(`Usuário registrado com sucesso: ${userAddress} com ID: ${userId}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
