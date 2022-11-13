# Learning

How to set up a Solidity Template|

## Use this to start new yarn Berry project

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
<<<<<<< HEAD
hardhat.config.ts file:
```
{
const config: HardhatUserConfig = {
...
  paths: { tests: "tests" },
...
  }
}
```

tsconfig.json file:
```

...
  "include": ["./scripts", "./tests", "./typechain-types"],
  "files": ["./hardhat.config.ts"],
...

```

.env file:
```
MNEMONIC="here is where your twelve words mnemonic should be put my friend"
PRIVATE_KEY="<your private key here if you don't have a mnemonic seed>"
INFURA_API_KEY="********************************"
INFURA_API_SECRET="********************************"
ALCHEMY_API_KEY="********************************"
ETHERSCAN_API_KEY="********************************"
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
