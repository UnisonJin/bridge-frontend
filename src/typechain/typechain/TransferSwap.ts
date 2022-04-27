/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace TransferSwap {
  export type SwapInfoStruct = {
    path: string[];
    dex: string;
    deadline: BigNumberish;
    minRecvAmt: BigNumberish;
  };

  export type SwapInfoStructOutput = [string[], string, BigNumber, BigNumber] & {
    path: string[];
    dex: string;
    deadline: BigNumber;
    minRecvAmt: BigNumber;
  };
}

export interface TransferSwapInterface extends utils.Interface {
  contractName: "TransferSwap";
  functions: {
    "executeMessage(address,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
    "messageBus()": FunctionFragment;
    "minSwapAmounts(address)": FunctionFragment;
    "nativeWrap()": FunctionFragment;
    "owner()": FunctionFragment;
    "setMessageBus(address)": FunctionFragment;
    "setMinSwapAmount(address,uint256)": FunctionFragment;
    "setNativeWrap(address)": FunctionFragment;
    "setSupportedDex(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferWithSwap(address,uint256,uint64,(address[],address,uint256,uint256),(address[],address,uint256,uint256),uint32,uint64)": FunctionFragment;
    "transferWithSwapNative(address,uint256,uint64,(address[],address,uint256,uint256),(address[],address,uint256,uint256),uint32,uint64,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "executeMessage", values: [string, BigNumberish, BytesLike, string]): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string],
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferFallback",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string],
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferRefund",
    values: [string, BigNumberish, BytesLike, string],
  ): string;
  encodeFunctionData(functionFragment: "messageBus", values?: undefined): string;
  encodeFunctionData(functionFragment: "minSwapAmounts", values: [string]): string;
  encodeFunctionData(functionFragment: "nativeWrap", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setMessageBus", values: [string]): string;
  encodeFunctionData(functionFragment: "setMinSwapAmount", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "setNativeWrap", values: [string]): string;
  encodeFunctionData(functionFragment: "setSupportedDex", values: [string, boolean]): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferWithSwap",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      TransferSwap.SwapInfoStruct,
      TransferSwap.SwapInfoStruct,
      BigNumberish,
      BigNumberish,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "transferWithSwapNative",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      TransferSwap.SwapInfoStruct,
      TransferSwap.SwapInfoStruct,
      BigNumberish,
      BigNumberish,
      boolean,
    ],
  ): string;

  decodeFunctionResult(functionFragment: "executeMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransferFallback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minSwapAmounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nativeWrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMessageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMinSwapAmount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNativeWrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSupportedDex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferWithSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferWithSwapNative", data: BytesLike): Result;

  events: {
    "DirectSwap(bytes32,uint64,uint256,address,uint256,address)": EventFragment;
    "MessageBusUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SwapRequestDone(bytes32,uint256,uint8)": EventFragment;
    "SwapRequestSent(bytes32,uint64,uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DirectSwap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageBusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapRequestDone"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapRequestSent"): EventFragment;
}

export type DirectSwapEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, BigNumber, string],
  {
    id: string;
    srcChainId: BigNumber;
    amountIn: BigNumber;
    tokenIn: string;
    amountOut: BigNumber;
    tokenOut: string;
  }
>;

export type DirectSwapEventFilter = TypedEventFilter<DirectSwapEvent>;

export type MessageBusUpdatedEvent = TypedEvent<[string], { messageBus: string }>;

export type MessageBusUpdatedEventFilter = TypedEventFilter<MessageBusUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type SwapRequestDoneEvent = TypedEvent<
  [string, BigNumber, number],
  { id: string; dstAmount: BigNumber; status: number }
>;

export type SwapRequestDoneEventFilter = TypedEventFilter<SwapRequestDoneEvent>;

export type SwapRequestSentEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string],
  {
    id: string;
    dstChainId: BigNumber;
    srcAmount: BigNumber;
    srcToken: string;
    dstToken: string;
  }
>;

export type SwapRequestSentEventFilter = TypedEventFilter<SwapRequestSentEvent>;

export interface TransferSwap extends BaseContract {
  contractName: "TransferSwap";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransferSwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransferFallback(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    minSwapAmounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    nativeWrap(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMinSwapAmount(
      _token: string,
      _minSwapAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setNativeWrap(
      _nativeWrap: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setSupportedDex(
      _dex: string,
      _enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferWithSwap(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferWithSwapNative(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      _nativeOut: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  executeMessage(
    _sender: string,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    arg0: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    arg5: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransferFallback(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    arg5: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  executeMessageWithTransferRefund(
    _token: string,
    _amount: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  minSwapAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  nativeWrap(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setMessageBus(
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMinSwapAmount(
    _token: string,
    _minSwapAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setNativeWrap(
    _nativeWrap: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setSupportedDex(
    _dex: string,
    _enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferWithSwap(
    _receiver: string,
    _amountIn: BigNumberish,
    _dstChainId: BigNumberish,
    _srcSwap: TransferSwap.SwapInfoStruct,
    _dstSwap: TransferSwap.SwapInfoStruct,
    _maxBridgeSlippage: BigNumberish,
    _nonce: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferWithSwapNative(
    _receiver: string,
    _amountIn: BigNumberish,
    _dstChainId: BigNumberish,
    _srcSwap: TransferSwap.SwapInfoStruct,
    _dstSwap: TransferSwap.SwapInfoStruct,
    _maxBridgeSlippage: BigNumberish,
    _nonce: BigNumberish,
    _nativeOut: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransferFallback(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides,
    ): Promise<number>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    minSwapAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nativeWrap(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setMessageBus(_messageBus: string, overrides?: CallOverrides): Promise<void>;

    setMinSwapAmount(_token: string, _minSwapAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setNativeWrap(_nativeWrap: string, overrides?: CallOverrides): Promise<void>;

    setSupportedDex(_dex: string, _enabled: boolean, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    transferWithSwap(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferWithSwapNative(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      _nativeOut: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    "DirectSwap(bytes32,uint64,uint256,address,uint256,address)"(
      id?: null,
      srcChainId?: null,
      amountIn?: null,
      tokenIn?: null,
      amountOut?: null,
      tokenOut?: null,
    ): DirectSwapEventFilter;
    DirectSwap(
      id?: null,
      srcChainId?: null,
      amountIn?: null,
      tokenIn?: null,
      amountOut?: null,
      tokenOut?: null,
    ): DirectSwapEventFilter;

    "MessageBusUpdated(address)"(messageBus?: null): MessageBusUpdatedEventFilter;
    MessageBusUpdated(messageBus?: null): MessageBusUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    "SwapRequestDone(bytes32,uint256,uint8)"(id?: null, dstAmount?: null, status?: null): SwapRequestDoneEventFilter;
    SwapRequestDone(id?: null, dstAmount?: null, status?: null): SwapRequestDoneEventFilter;

    "SwapRequestSent(bytes32,uint64,uint256,address,address)"(
      id?: null,
      dstChainId?: null,
      srcAmount?: null,
      srcToken?: null,
      dstToken?: null,
    ): SwapRequestSentEventFilter;
    SwapRequestSent(
      id?: null,
      dstChainId?: null,
      srcAmount?: null,
      srcToken?: null,
      dstToken?: null,
    ): SwapRequestSentEventFilter;
  };

  estimateGas: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransferFallback(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    minSwapAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nativeWrap(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setMessageBus(_messageBus: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setMinSwapAmount(
      _token: string,
      _minSwapAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setNativeWrap(_nativeWrap: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setSupportedDex(
      _dex: string,
      _enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferWithSwap(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferWithSwapNative(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      _nativeOut: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      arg0: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferFallback(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg5: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minSwapAmounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeWrap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMinSwapAmount(
      _token: string,
      _minSwapAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setNativeWrap(
      _nativeWrap: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setSupportedDex(
      _dex: string,
      _enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferWithSwap(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferWithSwapNative(
      _receiver: string,
      _amountIn: BigNumberish,
      _dstChainId: BigNumberish,
      _srcSwap: TransferSwap.SwapInfoStruct,
      _dstSwap: TransferSwap.SwapInfoStruct,
      _maxBridgeSlippage: BigNumberish,
      _nonce: BigNumberish,
      _nativeOut: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}