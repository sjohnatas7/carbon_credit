# Carbon Credit Blockchain Project

Este projeto utiliza a tecnologia blockchain para criar uma plataforma segura e transparente de emissão, comercialização e rastreamento de créditos de carbono. Baseado em Hyperledger Besu, o sistema permite que empresas e indivíduos compensem suas emissões de CO₂ por meio da aquisição de créditos, promovendo uma abordagem sustentável e de baixo impacto ambiental.


## Sobre o Projeto

O **Carbon Credit Blockchain Project** foi desenvolvido para fornecer uma solução transparente para o rastreamento e compensação de carbono, promovendo uma economia mais sustentável. A plataforma permite o registro de emissões de CO₂, cálculo e visualização de créditos disponíveis, além da comercialização desses créditos em um mercado descentralizado.

## Tecnologias Utilizadas

- **Hyperledger Besu**: Protocolo blockchain compatível com Ethereum, usado para criar uma rede permissionada com suporte a contratos inteligentes.
- **Hardhat**: Framework de desenvolvimento e teste para contratos inteligentes na Ethereum.
- **Ethereum Virtual Machine (EVM)**: Permite a execução dos contratos inteligentes, compatível com Besu.
- **Proof of Authority (PoA)**: Mecanismo de consenso que garante a eficiência e segurança da rede, ideal para redes permissionadas.

## Funcionalidades

1. **Registro de Usuário**: Criação de identidade digital para autenticar empresas e indivíduos na plataforma.
2. **Registro de Emissão de CO₂**: Documentação das emissões dos participantes de forma segura e imutável.
3. **Balanço de Tokens**: Visualização dos créditos de carbono disponíveis para cada usuário.
4. **Visualização de Registros de Emissões**: Acesso público aos dados de emissões, promovendo transparência.
5. **Compra e Venda de Créditos de Carbono**: Marketplace descentralizado para transações seguras de créditos de carbono.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Hyperledger Besu](https://besu.hyperledger.org/)
- [Hardhat](https://hardhat.org/)

## Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/sjohnatas7/carbon_credit.git
   cd carbon_credit
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configuração do Hyperledger Besu**:
   Configure a rede Hyperledger Besu para rodar localmente ou em um ambiente de testes. Para isso, siga a [documentação oficial do Besu](https://besu.hyperledger.org/en/stable/).

4. **Deploy dos Contratos Inteligentes**:
   Use o Hardhat para compilar e fazer o deploy dos contratos inteligentes:
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network <nome-da-rede>
   ```

5. **Inicie a aplicação** (se houver um frontend):
   ```bash
   npm start
   ```

## Uso

- **Registro de Emissões**: Os usuários registrados podem registrar suas emissões de CO₂ diretamente na plataforma.
- **Consulta de Balanço**: Visualize o saldo atual de créditos de carbono e as transações passadas.
- **Mercado de Créditos**: Participe da compra e venda de créditos de carbono, utilizando tokens gerenciados por contratos inteligentes.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este README fornece uma visão geral completa do projeto, com informações sobre o que ele faz, como configurá-lo e como utilizá-lo. Posso ajudar a adicionar mais detalhes em alguma seção?
