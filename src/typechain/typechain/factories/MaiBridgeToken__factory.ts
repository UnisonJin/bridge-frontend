/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MaiBridgeToken, MaiBridgeTokenInterface } from "../MaiBridgeToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "bridge_",
        type: "address",
      },
      {
        internalType: "address",
        name: "maihub_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "BridgeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridge",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maihub",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
    ],
    name: "updateBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001beb38038062001beb833981016040819052620000349162000316565b8351849084906200004d90600390602085019062000186565b5080516200006390600490602084019062000186565b505050620000806200007a6200013060201b60201c565b62000134565b600680546001600160a01b0319166001600160a01b038481169190911790915581166080819052604080516338d52e0f60e01b815290516338d52e0f91600480820192602092909190829003018186803b158015620000de57600080fd5b505afa158015620000f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001199190620003a5565b6001600160a01b031660a052506200040792505050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200019490620003ca565b90600052602060002090601f016020900481019282620001b8576000855562000203565b82601f10620001d357805160ff191683800117855562000203565b8280016001018555821562000203579182015b8281111562000203578251825591602001919060010190620001e6565b506200021192915062000215565b5090565b5b8082111562000211576000815560010162000216565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200025457600080fd5b81516001600160401b03808211156200027157620002716200022c565b604051601f8301601f19908116603f011681019082821181831017156200029c576200029c6200022c565b81604052838152602092508683858801011115620002b957600080fd5b600091505b83821015620002dd5785820183015181830184015290820190620002be565b83821115620002ef5760008385830101525b9695505050505050565b80516001600160a01b03811681146200031157600080fd5b919050565b600080600080608085870312156200032d57600080fd5b84516001600160401b03808211156200034557600080fd5b620003538883890162000242565b955060208701519150808211156200036a57600080fd5b50620003798782880162000242565b9350506200038a60408601620002f9565b91506200039a60608601620002f9565b905092959194509250565b600060208284031215620003b857600080fd5b620003c382620002f9565b9392505050565b600181811c90821680620003df57607f821691505b602082108114156200040157634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05161178662000465600039600081816102010152818161045b01528181610652015281816108320152610867015260008181610306015281816105a0015281816105e10152818161088901526108ca01526117866000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c8063715018a6116100d8578063a457c2d71161008c578063dd62ed3e11610066578063dd62ed3e14610328578063e78cea9214610361578063f2fde38b1461037457600080fd5b8063a457c2d7146102db578063a9059cbb146102ee578063b80781bd1461030157600080fd5b80638da5cb5b116100bd5780638da5cb5b146102af57806395d89b41146102c05780639dc29fac146102c857600080fd5b8063715018a61461029f578063893d20e8146102a757600080fd5b806338d52e0f1161012f57806340c10f191161011457806340c10f191461024e5780636eb382121461026157806370a082311461027657600080fd5b806338d52e0f146101fc578063395093511461023b57600080fd5b806318160ddd1161016057806318160ddd146101bd57806323b872dd146101cf578063313ce567146101e257600080fd5b806306fdde031461017c578063095ea7b31461019a575b600080fd5b610184610387565b6040516101919190611553565b60405180910390f35b6101ad6101a83660046115a2565b610419565b6040519015158152602001610191565b6002545b604051908152602001610191565b6101ad6101dd3660046115cc565b610431565b6101ea610457565b60405160ff9091168152602001610191565b6102237f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610191565b6101ad6102493660046115a2565b6104ef565b6101ad61025c3660046115a2565b61052e565b61027461026f366004611608565b610684565b005b6101c1610284366004611608565b6001600160a01b031660009081526020819052604090205490565b61027461073f565b6102236107a5565b6005546001600160a01b0316610223565b6101846107b9565b6101ad6102d63660046115a2565b6107c8565b6101ad6102e93660046115a2565b610938565b6101ad6102fc3660046115a2565b6109ed565b6102237f000000000000000000000000000000000000000000000000000000000000000081565b6101c1610336366004611623565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600654610223906001600160a01b031681565b610274610382366004611608565b6109fb565b60606003805461039690611656565b80601f01602080910402602001604051908101604052809291908181526020018280546103c290611656565b801561040f5780601f106103e45761010080835404028352916020019161040f565b820191906000526020600020905b8154815290600101906020018083116103f257829003601f168201915b5050505050905090565b600033610427818585610add565b5060019392505050565b60003361043f858285610c01565b61044a858585610c93565b60019150505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156104b257600080fd5b505afa1580156104c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ea9190611691565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061042790829086906105299087906116ca565b610add565b6006546000906001600160a01b031633146105905760405162461bcd60e51b815260206004820152601460248201527f63616c6c6572206973206e6f742062726964676500000000000000000000000060448201526064015b60405180910390fd5b61059a3083610e90565b6105c5307f000000000000000000000000000000000000000000000000000000000000000084610add565b6040516315b9c5c360e21b8152306004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906356e7170c90604401600060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b5061067b9250506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690508484610f6f565b50600192915050565b6005546001600160a01b031633146106de5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610587565b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fe1694c0b21fdceff6411daed547c7463c2341b9695387bc82595b5b9b1851d4a9060200160405180910390a150565b6005546001600160a01b031633146107995760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610587565b6107a36000611004565b565b60006104ea6005546001600160a01b031690565b60606004805461039690611656565b6006546000906001600160a01b031633146108255760405162461bcd60e51b815260206004820152601460248201527f63616c6c6572206973206e6f74206272696467650000000000000000000000006044820152606401610587565b61085a6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016843085611063565b6108ae6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f00000000000000000000000000000000000000000000000000000000000000008461109b565b60405163086cba5760e11b8152306004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310d974ae90604401600060405180830381600087803b15801561091657600080fd5b505af115801561092a573d6000803e3d6000fd5b5050505061067b308361115c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156109d55760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610587565b6109e28286868403610add565b506001949350505050565b600033610427818585610c93565b6005546001600160a01b03163314610a555760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610587565b6001600160a01b038116610ad15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610587565b610ada81611004565b50565b6001600160a01b038316610b3f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610587565b6001600160a01b038216610ba05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610587565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610c8d5781811015610c805760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610587565b610c8d8484848403610add565b50505050565b6001600160a01b038316610d0f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610587565b6001600160a01b038216610d715760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610587565b6001600160a01b03831660009081526020819052604090205481811015610e005760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610587565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e379084906116ca565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e8391815260200190565b60405180910390a3610c8d565b6001600160a01b038216610ee65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610587565b8060026000828254610ef891906116ca565b90915550506001600160a01b03821660009081526020819052604081208054839290610f259084906116ca565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6040516001600160a01b038316602482015260448101829052610fff90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526112aa565b505050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610c8d9085906323b872dd60e01b90608401610f9b565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b1580156110e757600080fd5b505afa1580156110fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111f91906116e2565b61112991906116ca565b6040516001600160a01b038516602482015260448101829052909150610c8d90859063095ea7b360e01b90606401610f9b565b6001600160a01b0382166111bc5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610587565b6001600160a01b038216600090815260208190526040902054818110156112305760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610587565b6001600160a01b038316600090815260208190526040812083830390556002805484929061125f9084906116fb565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60006112ff826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661138f9092919063ffffffff16565b805190915015610fff578080602001905181019061131d9190611712565b610fff5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610587565b606061139e84846000856113a6565b949350505050565b60608247101561141e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610587565b6001600160a01b0385163b6114755760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610587565b600080866001600160a01b031685876040516114919190611734565b60006040518083038185875af1925050503d80600081146114ce576040519150601f19603f3d011682016040523d82523d6000602084013e6114d3565b606091505b50915091506114e38282866114ee565b979650505050505050565b606083156114fd575081610450565b82511561150d5782518084602001fd5b8160405162461bcd60e51b81526004016105879190611553565b60005b8381101561154257818101518382015260200161152a565b83811115610c8d5750506000910152565b6020815260008251806020840152611572816040850160208701611527565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461159d57600080fd5b919050565b600080604083850312156115b557600080fd5b6115be83611586565b946020939093013593505050565b6000806000606084860312156115e157600080fd5b6115ea84611586565b92506115f860208501611586565b9150604084013590509250925092565b60006020828403121561161a57600080fd5b61045082611586565b6000806040838503121561163657600080fd5b61163f83611586565b915061164d60208401611586565b90509250929050565b600181811c9082168061166a57607f821691505b6020821081141561168b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156116a357600080fd5b815160ff8116811461045057600080fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156116dd576116dd6116b4565b500190565b6000602082840312156116f457600080fd5b5051919050565b60008282101561170d5761170d6116b4565b500390565b60006020828403121561172457600080fd5b8151801515811461045057600080fd5b60008251611746818460208701611527565b919091019291505056fea2646970667358221220ee4dc9f5748b6a88a0ba576d4a8c4a3c13467aad83b6cc29bb61319b419cc8e064736f6c63430008090033";

type MaiBridgeTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MaiBridgeTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MaiBridgeToken__factory extends ContractFactory {
  constructor(...args: MaiBridgeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MaiBridgeToken";
  }

  deploy(
    name_: string,
    symbol_: string,
    bridge_: string,
    maihub_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MaiBridgeToken> {
    return super.deploy(name_, symbol_, bridge_, maihub_, overrides || {}) as Promise<MaiBridgeToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    bridge_: string,
    maihub_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, bridge_, maihub_, overrides || {});
  }
  attach(address: string): MaiBridgeToken {
    return super.attach(address) as MaiBridgeToken;
  }
  connect(signer: Signer): MaiBridgeToken__factory {
    return super.connect(signer) as MaiBridgeToken__factory;
  }
  static readonly contractName: "MaiBridgeToken";
  public readonly contractName: "MaiBridgeToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaiBridgeTokenInterface {
    return new utils.Interface(_abi) as MaiBridgeTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MaiBridgeToken {
    return new Contract(address, _abi, signerOrProvider) as MaiBridgeToken;
  }
}
