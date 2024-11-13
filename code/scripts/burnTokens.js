require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
    const userAddress = '0x81cf91b20BFa78e8830a26915d88BEEcF22Ad10e'
    const [admin] = await ethers.getSigners(); // Define a conta admin e uma conta de usuário para o teste

    const carbonCreditSystemAddress = CONTRACT_ADDRESS;
    const CarbonCreditSystem = await ethers.getContractFactory("CarbonCreditSystem");
    const carbonCreditSystem = await CarbonCreditSystem.attach(carbonCreditSystemAddress);

    const burnAmount = ethers.parseUnits("5", 18); // Exemplo: Queimar 5 créditos de carbono

    const tx = await carbonCreditSystem.connect(admin).burn(burnAmount);
    await tx.wait();

    console.log(`Usuário ${admin.address} queimou ${ethers.formatUnits(burnAmount, 18)} créditos de carbono`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
