/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISwapCanoToken, ISwapCanoTokenInterface } from "../ISwapCanoToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapBridgeForCanonical",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapCanonicalForBridge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISwapCanoToken__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapCanoTokenInterface {
    return new utils.Interface(_abi) as ISwapCanoTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ISwapCanoToken {
    return new Contract(address, _abi, signerOrProvider) as ISwapCanoToken;
  }
}
