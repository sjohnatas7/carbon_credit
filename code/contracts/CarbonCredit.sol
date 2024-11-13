// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonCreditSystem is ERC20 {
    address public admin;
    uint256 public emissionRate = 1 ether; // 1 crédito de carbono por tonelada de CO₂

    struct EmissionRecord {
        uint256 emissionAmount;
        uint256 timestamp;
    }

    struct User {
        bool active;
        string userId;
    }

    // Mapeamento para armazenar o histórico de emissões de cada usuário
    mapping(address => EmissionRecord[]) public userEmissions;

    // Mapeamento para verificar se um endereço é um usuário registrado
    mapping(address => User) public users;

    // Evento para registrar a emissão e recompensa
    event EmissionRecorded(
        address indexed emitter,
        uint256 emissionAmount,
        uint256 creditsIssued,
        uint256 timestamp
    );
    event UserRegistered(address indexed userAddress, string userId);

    constructor() ERC20("CarbonCredit", "CC") {
        admin = msg.sender;
        _mint(admin, 1000000 * 10 ** decimals()); // Emissão inicial para o administrador
    }

    // Função para registrar um novo usuário
    function registerUser(address userAddress, string memory userId) external {
        require(
            msg.sender == admin,
            "Somente o administrador pode registrar usuarios"
        );
        require(!users[userAddress].active, "Usuario ja registrado");

        users[userAddress] = User({active: true, userId: userId});

        emit UserRegistered(userAddress, userId);
    }

    // Função para registrar emissão de CO₂ e emitir créditos de carbono para o usuário
    function recordEmission(
        address emitter,
        uint256 emissionAmount
    ) external onlyRegisteredUser(emitter) {
        require(
            msg.sender == admin,
            "Somente o administrador pode registrar emissoes"
        );

        // Calcula a quantidade de créditos de carbono a serem emitidos
        uint256 credits = emissionAmount * emissionRate;

        // Emite os tokens de créditos de carbono para o usuário
        _mint(emitter, credits);

        // Armazena o registro de emissão no histórico do usuário
        userEmissions[emitter].push(
            EmissionRecord({
                emissionAmount: emissionAmount,
                timestamp: block.timestamp
            })
        );

        // Emite um evento para rastreamento externo
        emit EmissionRecorded(
            emitter,
            emissionAmount,
            credits,
            block.timestamp
        );
    }

    // Função para queimar tokens, simulando o uso dos créditos de carbono
    function burn(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _burn(msg.sender, amount);
    }

    // Modificador para garantir que um usuário esteja registrado
    modifier onlyRegisteredUser(address userAddress) {
        require(users[userAddress].active, "Usuario nao registrado");
        _;
    }

    // Função para consultar o histórico de emissões de um usuário
    function getUserEmissionRecords(address emitter) external view returns (EmissionRecord[] memory) {
        return userEmissions[emitter];
    }
}
