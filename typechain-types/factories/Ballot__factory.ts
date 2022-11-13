/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Ballot, BallotInterface } from "../Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200150338038062001503833981810160405281019062000037919062000342565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060005b81518110156200017657600260405180604001604052808484815181106200010f576200010e62000393565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080806200016d90620003fb565b915050620000e2565b505062000448565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001e28262000197565b810181811067ffffffffffffffff82111715620002045762000203620001a8565b5b80604052505050565b6000620002196200017e565b9050620002278282620001d7565b919050565b600067ffffffffffffffff8211156200024a5762000249620001a8565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b620002758162000260565b81146200028157600080fd5b50565b60008151905062000295816200026a565b92915050565b6000620002b2620002ac846200022c565b6200020d565b90508083825260208201905060208402830185811115620002d857620002d76200025b565b5b835b81811015620003055780620002f0888262000284565b845260208401935050602081019050620002da565b5050509392505050565b600082601f83011262000327576200032662000192565b5b8151620003398482602086016200029b565b91505092915050565b6000602082840312156200035b576200035a62000188565b5b600082015167ffffffffffffffff8111156200037c576200037b6200018d565b5b6200038a848285016200030f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006200040882620003f1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200043d576200043c620003c2565b5b600182019050919050565b6110ab80620004586000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063609ff1bd1161005b578063609ff1bd146101145780639e7b8d6114610132578063a3ec138d1461014e578063e2ba53f01461018157610088565b80630121b93f1461008d578063013cf08b146100a95780632e4176cf146100da5780635c19a95c146100f8575b600080fd5b6100a760048036038101906100a29190610a3b565b61019f565b005b6100c360048036038101906100be9190610a3b565b6102e5565b6040516100d1929190610a90565b60405180910390f35b6100e2610319565b6040516100ef9190610afa565b60405180910390f35b610112600480360381019061010d9190610b41565b61033d565b005b61011c610730565b6040516101299190610b6e565b60405180910390f35b61014c60048036038101906101479190610b41565b6107b8565b005b61016860048036038101906101639190610b41565b61096f565b6040516101789493929190610ba4565b60405180910390f35b6101896109cc565b6040516101969190610be9565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000015403610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022090610c61565b60405180910390fd5b8060010160009054906101000a900460ff161561027b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027290610ccd565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600201819055508060000154600283815481106102ba576102b9610ced565b5b906000526020600020906002020160010160008282546102da9190610d4b565b925050819055505050565b600281815481106102f557600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154036103c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103be90610dcb565b60405180910390fd5b8060010160009054906101000a900460ff1615610419576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041090610e37565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610487576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047e90610ea3565b60405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105f657600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e890610f0f565b60405180910390fd5b610488565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060018160000154101561064b57600080fd5b60018260010160006101000a81548160ff021916908315150217905550828260010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060010160009054906101000a900460ff161561070b57816000015460028260020154815481106106df576106de610ced565b5b906000526020600020906002020160010160008282546106ff9190610d4b565b9250508190555061072b565b81600001548160000160008282546107239190610d4b565b925050819055505b505050565b6000806000905060005b6002805490508110156107b357816002828154811061075c5761075b610ced565b5b90600052602060002090600202016001015411156107a0576002818154811061078857610787610ced565b5b90600052602060002090600202016001015491508092505b80806107ab90610f2f565b91505061073a565b505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610846576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083d90610fe9565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16156108d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cd90611055565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541461092557600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b600060026109d8610730565b815481106109e9576109e8610ced565b5b906000526020600020906002020160000154905090565b600080fd5b6000819050919050565b610a1881610a05565b8114610a2357600080fd5b50565b600081359050610a3581610a0f565b92915050565b600060208284031215610a5157610a50610a00565b5b6000610a5f84828501610a26565b91505092915050565b6000819050919050565b610a7b81610a68565b82525050565b610a8a81610a05565b82525050565b6000604082019050610aa56000830185610a72565b610ab26020830184610a81565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ae482610ab9565b9050919050565b610af481610ad9565b82525050565b6000602082019050610b0f6000830184610aeb565b92915050565b610b1e81610ad9565b8114610b2957600080fd5b50565b600081359050610b3b81610b15565b92915050565b600060208284031215610b5757610b56610a00565b5b6000610b6584828501610b2c565b91505092915050565b6000602082019050610b836000830184610a81565b92915050565b60008115159050919050565b610b9e81610b89565b82525050565b6000608082019050610bb96000830187610a81565b610bc66020830186610b95565b610bd36040830185610aeb565b610be06060830184610a81565b95945050505050565b6000602082019050610bfe6000830184610a72565b92915050565b600082825260208201905092915050565b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b6000610c4b601483610c04565b9150610c5682610c15565b602082019050919050565b60006020820190508181036000830152610c7a81610c3e565b9050919050565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b6000610cb7600e83610c04565b9150610cc282610c81565b602082019050919050565b60006020820190508181036000830152610ce681610caa565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d5682610a05565b9150610d6183610a05565b9250828201905080821115610d7957610d78610d1c565b5b92915050565b7f596f752068617665206e6f20726967687420746f20766f746500000000000000600082015250565b6000610db5601983610c04565b9150610dc082610d7f565b602082019050919050565b60006020820190508181036000830152610de481610da8565b9050919050565b7f596f7520616c726561647920766f7465642e0000000000000000000000000000600082015250565b6000610e21601283610c04565b9150610e2c82610deb565b602082019050919050565b60006020820190508181036000830152610e5081610e14565b9050919050565b7f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000600082015250565b6000610e8d601e83610c04565b9150610e9882610e57565b602082019050919050565b60006020820190508181036000830152610ebc81610e80565b9050919050565b7f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000600082015250565b6000610ef9601983610c04565b9150610f0482610ec3565b602082019050919050565b60006020820190508181036000830152610f2881610eec565b9050919050565b6000610f3a82610a05565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f6c57610f6b610d1c565b5b600182019050919050565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b6000610fd3602883610c04565b9150610fde82610f77565b604082019050919050565b6000602082019050818103600083015261100281610fc6565b9050919050565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b600061103f601883610c04565b915061104a82611009565b602082019050919050565b6000602082019050818103600083015261106e81611032565b905091905056fea26469706673582212209cf7de0a5a52978d107db6fb4edf7ff41eefdc6538ac37f18bb0a63c2a390cef64736f6c63430008110033";

type BallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ballot__factory extends ContractFactory {
  constructor(...args: BallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proposalNames: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ballot> {
    return super.deploy(proposalNames, overrides || {}) as Promise<Ballot>;
  }
  override getDeployTransaction(
    proposalNames: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  override attach(address: string): Ballot {
    return super.attach(address) as Ballot;
  }
  override connect(signer: Signer): Ballot__factory {
    return super.connect(signer) as Ballot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new utils.Interface(_abi) as BallotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ballot {
    return new Contract(address, _abi, signerOrProvider) as Ballot;
  }
}
