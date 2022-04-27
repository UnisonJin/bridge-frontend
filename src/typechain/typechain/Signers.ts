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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SignersInterface extends utils.Interface {
  contractName: "Signers";
  functions: {
    "increaseNoticePeriod(uint256)": FunctionFragment;
    "noticePeriod()": FunctionFragment;
    "notifyResetSigners()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resetSigners(address[],uint256[])": FunctionFragment;
    "resetTime()": FunctionFragment;
    "ssHash()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "triggerTime()": FunctionFragment;
    "updateSigners(uint256,address[],uint256[],bytes[],address[],uint256[])": FunctionFragment;
    "verifySigs(bytes,bytes[],address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "increaseNoticePeriod", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "noticePeriod", values?: undefined): string;
  encodeFunctionData(functionFragment: "notifyResetSigners", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(functionFragment: "resetSigners", values: [string[], BigNumberish[]]): string;
  encodeFunctionData(functionFragment: "resetTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "ssHash", values?: undefined): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
  encodeFunctionData(functionFragment: "triggerTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateSigners",
    values: [BigNumberish, string[], BigNumberish[], BytesLike[], string[], BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: "verifySigs",
    values: [BytesLike, BytesLike[], string[], BigNumberish[]],
  ): string;

  decodeFunctionResult(functionFragment: "increaseNoticePeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "noticePeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "notifyResetSigners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resetSigners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resetTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ssHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "triggerTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateSigners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifySigs", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ResetNotification(uint256)": EventFragment;
    "SignersUpdated(address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResetNotification"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignersUpdated"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type ResetNotificationEvent = TypedEvent<[BigNumber], { resetTime: BigNumber }>;

export type ResetNotificationEventFilter = TypedEventFilter<ResetNotificationEvent>;

export type SignersUpdatedEvent = TypedEvent<[string[], BigNumber[]], { _signers: string[]; _powers: BigNumber[] }>;

export type SignersUpdatedEventFilter = TypedEventFilter<SignersUpdatedEvent>;

export interface Signers extends BaseContract {
  contractName: "Signers";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SignersInterface;

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
    increaseNoticePeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    noticePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyResetSigners(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    resetSigners(
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    resetTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    ssHash(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    triggerTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateSigners(
      _triggerTime: BigNumberish,
      _newSigners: string[],
      _newPowers: BigNumberish[],
      _sigs: BytesLike[],
      _curSigners: string[],
      _curPowers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<[void]>;
  };

  increaseNoticePeriod(
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  noticePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  notifyResetSigners(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  resetSigners(
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  resetTime(overrides?: CallOverrides): Promise<BigNumber>;

  ssHash(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  triggerTime(overrides?: CallOverrides): Promise<BigNumber>;

  updateSigners(
    _triggerTime: BigNumberish,
    _newSigners: string[],
    _newPowers: BigNumberish[],
    _sigs: BytesLike[],
    _curSigners: string[],
    _curPowers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  verifySigs(
    _msg: BytesLike,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<void>;

  callStatic: {
    increaseNoticePeriod(period: BigNumberish, overrides?: CallOverrides): Promise<void>;

    noticePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    notifyResetSigners(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resetSigners(_signers: string[], _powers: BigNumberish[], overrides?: CallOverrides): Promise<void>;

    resetTime(overrides?: CallOverrides): Promise<BigNumber>;

    ssHash(overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    triggerTime(overrides?: CallOverrides): Promise<BigNumber>;

    updateSigners(
      _triggerTime: BigNumberish,
      _newSigners: string[],
      _newPowers: BigNumberish[],
      _sigs: BytesLike[],
      _curSigners: string[],
      _curPowers: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    "ResetNotification(uint256)"(resetTime?: null): ResetNotificationEventFilter;
    ResetNotification(resetTime?: null): ResetNotificationEventFilter;

    "SignersUpdated(address[],uint256[])"(_signers?: null, _powers?: null): SignersUpdatedEventFilter;
    SignersUpdated(_signers?: null, _powers?: null): SignersUpdatedEventFilter;
  };

  estimateGas: {
    increaseNoticePeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    noticePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    notifyResetSigners(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    resetSigners(
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    resetTime(overrides?: CallOverrides): Promise<BigNumber>;

    ssHash(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    triggerTime(overrides?: CallOverrides): Promise<BigNumber>;

    updateSigners(
      _triggerTime: BigNumberish,
      _newSigners: string[],
      _newPowers: BigNumberish[],
      _sigs: BytesLike[],
      _curSigners: string[],
      _curPowers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    increaseNoticePeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    noticePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyResetSigners(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    resetSigners(
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    resetTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ssHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    triggerTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateSigners(
      _triggerTime: BigNumberish,
      _newSigners: string[],
      _newPowers: BigNumberish[],
      _sigs: BytesLike[],
      _curSigners: string[],
      _curPowers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}