# 🗺 Web3 Roadmap

A roadmap for [Web3](https://en.wikipedia.org/wiki/Web3) development, divided into three steps.

## 🖋 Step 1 - Solidity Smart Contract

In this first step, we will implement a basic [Solidity](https://soliditylang.org/) smart contract.

`Motivation`: Centralized identity systems often suffer from vulnerabilities such as single points of failure (SPOF), lack of transparency in data handling, limited user control, high operational costs, inefficiencies, and risks of censorship.

`Proposal`: Suppose you want to create a decentralized application (DApp) to securely and transparently manage user identities on the blockchain, thereby avoiding these vulnerabilities.

So, we created the [Identity Manager](https://github.com/MiguelHenri/Web3-Roadmap/blob/main/code/contracts/IdentityManager.sol) smart contract to store these decentralized identifiers (DIDs). 
> You can try it out on [Remix ETH](https://remix.ethereum.org/).

## 🔗 Step 2 - Hyperledger Besu Private Blockchain

In the second step, we will run a private blockchain using [Hyperledger Besu](https://besu.hyperledger.org/private-networks). We will also deploy and run our smart contract on this new network.

`Motivation`: Unlike public blockchains, where data is visible to everyone, a private network allows for stringent privacy controls, ensuring compliance with data protection regulations and safeguarding user information from unauthorized access.

To setup Besu:
- Follow this [guide](https://besu.hyperledger.org/private-networks/tutorials/ibft) to run an IBFT Besu private network;
- Make sure you have all [prerequisites](https://besu.hyperledger.org/private-networks/tutorials/ibft#prerequisites).
> It is preferrable and easier if you run Linux OS.

To deploy and run the smart contract:
- Install [MetaMask](https://metamask.io/download/) for your browser;
- Configure MetaMask to connect to the Besu blockchain network;
- Connect [Remix ETH](https://remix.ethereum.org/) to MetaMask by selecting the `Injected Provider` environment;
- Finally, deploy and run the [Identity Manager](https://github.com/MiguelHenri/Web3-Roadmap/blob/main/code/contracts/IdentityManager.sol) contract on your private blockchain network.

## ⚙ Step 3 - Transactions using Hardhat

In the final step, we will interact with our smart contract using the [Hardhat](https://hardhat.org/) environment.
> Hardhat uses ether.js to interact with the blockchain network.

`Motivation`: Hardhat is an essential tool for blockchain developers. It provides a built-in local development network for rapid testing and debugging, plugins and an intuitive setup.

Before running, make sure:
- You have one of the [node valid versions](https://hardhat.org/nodejs-versions);
- You have the `.env` variables (from Besu) configured correctly. Check `.env.example`.

To deploy the contract and run transactions using the Hardhat environment:
- Install all dependencies by running `npm install` in `/code` directory;
- Compile the smart contract by running `npx hardhat compile`;
- Call the scripts by running `npx hardhat run scripts/interact<x>.js --network besu`;
