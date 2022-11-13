# Learning

How to set up a Solidity Template|

Use this to start new yarn Berry project

yarn init -2
    ...
yarn config set nodeLinker node-modules
yarn add hardhat --dev
yarn hardhat init

## Environment setup

.mocharc.json file:
```
{
  "require": "hardhat/register",
  "timeout": 40000,
  "_": ["tests/**/*.ts"]
}

```


# Sample Hardhat Project



This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
