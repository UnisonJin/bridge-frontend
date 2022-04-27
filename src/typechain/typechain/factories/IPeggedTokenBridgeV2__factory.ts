/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPeggedTokenBridgeV2, IPeggedTokenBridgeV2Interface } from "../IPeggedTokenBridgeV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_toChainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_toAccount",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_toChainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_toAccount",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
    ],
    name: "burnFrom",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_request",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "recordId",
        type: "bytes32",
      },
    ],
    name: "records",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPeggedTokenBridgeV2__factory {
  static readonly abi = _abi;
  static createInterface(): IPeggedTokenBridgeV2Interface {
    return new utils.Interface(_abi) as IPeggedTokenBridgeV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPeggedTokenBridgeV2 {
    return new Contract(address, _abi, signerOrProvider) as IPeggedTokenBridgeV2;
  }
}
