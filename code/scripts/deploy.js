async function main() {
    const CarbonCreditSystem = await ethers.getContractFactory("CarbonCreditSystem");
    const carbonCreditSystem = await CarbonCreditSystem.deploy();
    console.log(carbonCreditSystem)
    console.log("Contrato implantado em: ", carbonCreditSystem.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });