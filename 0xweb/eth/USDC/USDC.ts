/**
 *  AUTO-Generated Class: 2023-04-22 21:00
 *  Implementation: https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#code
 */
import di from 'a-di';
import { TAddress } from '@dequanto/models/TAddress';
import { TAccount } from '@dequanto/models/TAccount';
import { TBufferLike } from '@dequanto/models/TBufferLike';
import { ClientEventsStream, TClientEventsStreamData } from '@dequanto/clients/ClientEventsStream';
import { ContractBase } from '@dequanto/contracts/ContractBase';
import { ContractStorageReaderBase } from '@dequanto/contracts/ContractStorageReaderBase';
import { type AbiItem } from 'web3-utils';
import type { BlockTransactionString } from 'web3-eth';
import { TransactionReceipt, Transaction, EventLog } from 'web3-core';
import { TxWriter } from '@dequanto/txs/TxWriter';
import { ITxLogItem } from '@dequanto/txs/receipt/ITxLogItem';
import { Web3Client } from '@dequanto/clients/Web3Client';
import { IBlockChainExplorer } from '@dequanto/BlockchainExplorer/IBlockChainExplorer';
import { SubjectStream } from '@dequanto/class/SubjectStream';



import { Etherscan } from '@dequanto/BlockchainExplorer/Etherscan'
import { EthWeb3Client } from '@dequanto/clients/EthWeb3Client'
export class USDC extends ContractBase {
    constructor(
        public address: TAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        public client: Web3Client = di.resolve(EthWeb3Client, ),
        public explorer: IBlockChainExplorer = di.resolve(Etherscan, ),
    ) {
        super(address, client, explorer)
    }

    // 0xd9169487
    async CANCEL_AUTHORIZATION_TYPEHASH (): Promise<TBufferLike> {
        return this.$read(this.$getAbiItem('function', 'CANCEL_AUTHORIZATION_TYPEHASH'));
    }

    // 0x3644e515
    async DOMAIN_SEPARATOR (): Promise<TBufferLike> {
        return this.$read(this.$getAbiItem('function', 'DOMAIN_SEPARATOR'));
    }

    // 0x30adf81f
    async PERMIT_TYPEHASH (): Promise<TBufferLike> {
        return this.$read(this.$getAbiItem('function', 'PERMIT_TYPEHASH'));
    }

    // 0x7f2eecc3
    async RECEIVE_WITH_AUTHORIZATION_TYPEHASH (): Promise<TBufferLike> {
        return this.$read(this.$getAbiItem('function', 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH'));
    }

    // 0xa0cc6a68
    async TRANSFER_WITH_AUTHORIZATION_TYPEHASH (): Promise<TBufferLike> {
        return this.$read(this.$getAbiItem('function', 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH'));
    }

    // 0xdd62ed3e
    async allowance (owner: TAddress, spender: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'allowance'), owner, spender);
    }

    // 0x095ea7b3
    async approve (sender: TSender, spender: TAddress, value: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'approve'), sender, spender, value);
    }

    // 0xe94a0102
    async authorizationState (authorizer: TAddress, nonce: TBufferLike): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'authorizationState'), authorizer, nonce);
    }

    // 0x70a08231
    async balanceOf (account: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'balanceOf'), account);
    }

    // 0xf9f92be4
    async blacklist (sender: TSender, _account: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'blacklist'), sender, _account);
    }

    // 0xbd102430
    async blacklister (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'blacklister'));
    }

    // 0x42966c68
    async burn (sender: TSender, _amount: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'burn'), sender, _amount);
    }

    // 0x5a049a70
    async cancelAuthorization (sender: TSender, authorizer: TAddress, nonce: TBufferLike, v: number, r: TBufferLike, s: TBufferLike): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'cancelAuthorization'), sender, authorizer, nonce, v, r, s);
    }

    // 0x4e44d956
    async configureMinter (sender: TSender, minter: TAddress, minterAllowedAmount: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'configureMinter'), sender, minter, minterAllowedAmount);
    }

    // 0xe5a6b10f
    async currency (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'currency'));
    }

    // 0x313ce567
    async decimals (): Promise<number> {
        return this.$read(this.$getAbiItem('function', 'decimals'));
    }

    // 0xa457c2d7
    async decreaseAllowance (sender: TSender, spender: TAddress, decrement: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'decreaseAllowance'), sender, spender, decrement);
    }

    // 0x39509351
    async increaseAllowance (sender: TSender, spender: TAddress, increment: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'increaseAllowance'), sender, spender, increment);
    }

    // 0x3357162b
    async initialize (sender: TSender, tokenName: string, tokenSymbol: string, tokenCurrency: string, tokenDecimals: number, newMasterMinter: TAddress, newPauser: TAddress, newBlacklister: TAddress, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, tokenName, tokenSymbol, tokenCurrency, tokenDecimals, newMasterMinter, newPauser, newBlacklister, newOwner);
    }

    // 0xd608ea64
    async initializeV2 (sender: TSender, newName: string): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initializeV2'), sender, newName);
    }

    // 0x2fc81e09
    async initializeV2_1 (sender: TSender, lostAndFound: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initializeV2_1'), sender, lostAndFound);
    }

    // 0xfe575a87
    async isBlacklisted (_account: TAddress): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'isBlacklisted'), _account);
    }

    // 0xaa271e1a
    async isMinter (account: TAddress): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'isMinter'), account);
    }

    // 0x35d99f35
    async masterMinter (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'masterMinter'));
    }

    // 0x40c10f19
    async mint (sender: TSender, _to: TAddress, _amount: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'mint'), sender, _to, _amount);
    }

    // 0x8a6db9c3
    async minterAllowance (minter: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'minterAllowance'), minter);
    }

    // 0x06fdde03
    async name (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'name'));
    }

    // 0x7ecebe00
    async nonces (owner: TAddress): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'nonces'), owner);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0x8456cb59
    async pause (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'pause'), sender);
    }

    // 0x5c975abb
    async paused (): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'paused'));
    }

    // 0x9fd0506d
    async pauser (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pauser'));
    }

    // 0xd505accf
    async permit (sender: TSender, owner: TAddress, spender: TAddress, value: bigint, deadline: bigint, v: number, r: TBufferLike, s: TBufferLike): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'permit'), sender, owner, spender, value, deadline, v, r, s);
    }

    // 0xef55bec6
    async receiveWithAuthorization (sender: TSender, from: TAddress, to: TAddress, value: bigint, validAfter: bigint, validBefore: bigint, nonce: TBufferLike, v: number, r: TBufferLike, s: TBufferLike): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'receiveWithAuthorization'), sender, from, to, value, validAfter, validBefore, nonce, v, r, s);
    }

    // 0x3092afd5
    async removeMinter (sender: TSender, minter: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'removeMinter'), sender, minter);
    }

    // 0xb2118a8d
    async rescueERC20 (sender: TSender, tokenContract: TAddress, to: TAddress, amount: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'rescueERC20'), sender, tokenContract, to, amount);
    }

    // 0x38a63183
    async rescuer (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'rescuer'));
    }

    // 0x95d89b41
    async symbol (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'symbol'));
    }

    // 0x18160ddd
    async totalSupply (): Promise<bigint> {
        return this.$read(this.$getAbiItem('function', 'totalSupply'));
    }

    // 0xa9059cbb
    async transfer (sender: TSender, to: TAddress, value: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transfer'), sender, to, value);
    }

    // 0x23b872dd
    async transferFrom (sender: TSender, from: TAddress, to: TAddress, value: bigint): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferFrom'), sender, from, to, value);
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    // 0xe3ee160e
    async transferWithAuthorization (sender: TSender, from: TAddress, to: TAddress, value: bigint, validAfter: bigint, validBefore: bigint, nonce: TBufferLike, v: number, r: TBufferLike, s: TBufferLike): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferWithAuthorization'), sender, from, to, value, validAfter, validBefore, nonce, v, r, s);
    }

    // 0x1a895266
    async unBlacklist (sender: TSender, _account: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'unBlacklist'), sender, _account);
    }

    // 0x3f4ba83a
    async unpause (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'unpause'), sender);
    }

    // 0xad38bf22
    async updateBlacklister (sender: TSender, _newBlacklister: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateBlacklister'), sender, _newBlacklister);
    }

    // 0xaa20e1e4
    async updateMasterMinter (sender: TSender, _newMasterMinter: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateMasterMinter'), sender, _newMasterMinter);
    }

    // 0x554bab3c
    async updatePauser (sender: TSender, _newPauser: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updatePauser'), sender, _newPauser);
    }

    // 0x2ab60045
    async updateRescuer (sender: TSender, newRescuer: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'updateRescuer'), sender, newRescuer);
    }

    // 0x54fd4d50
    async version (): Promise<string> {
        return this.$read(this.$getAbiItem('function', 'version'));
    }

    onTransaction <TMethod extends keyof IMethods> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: Transaction
        block: BlockTransactionString
        calldata: IMethods[TMethod]
    }> {
        options ??= {};
        options.filter ??= {};
        options.filter.method = <any> method;
        return <any> this.$onTransaction(options);
    }

    onLog (event: keyof IEvents, cb?: (event: TClientEventsStreamData) => void): ClientEventsStream<TClientEventsStreamData> {
        return this.$onLog(event, cb);
    }

    onApproval (fn?: (event: TClientEventsStreamData<TLogApprovalParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogApprovalParameters>> {
        return this.$onLog('Approval', fn);
    }

    onAuthorizationCanceled (fn?: (event: TClientEventsStreamData<TLogAuthorizationCanceledParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogAuthorizationCanceledParameters>> {
        return this.$onLog('AuthorizationCanceled', fn);
    }

    onAuthorizationUsed (fn?: (event: TClientEventsStreamData<TLogAuthorizationUsedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogAuthorizationUsedParameters>> {
        return this.$onLog('AuthorizationUsed', fn);
    }

    onBlacklisted (fn?: (event: TClientEventsStreamData<TLogBlacklistedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogBlacklistedParameters>> {
        return this.$onLog('Blacklisted', fn);
    }

    onBlacklisterChanged (fn?: (event: TClientEventsStreamData<TLogBlacklisterChangedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogBlacklisterChangedParameters>> {
        return this.$onLog('BlacklisterChanged', fn);
    }

    onBurn (fn?: (event: TClientEventsStreamData<TLogBurnParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogBurnParameters>> {
        return this.$onLog('Burn', fn);
    }

    onMasterMinterChanged (fn?: (event: TClientEventsStreamData<TLogMasterMinterChangedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogMasterMinterChangedParameters>> {
        return this.$onLog('MasterMinterChanged', fn);
    }

    onMint (fn?: (event: TClientEventsStreamData<TLogMintParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogMintParameters>> {
        return this.$onLog('Mint', fn);
    }

    onMinterConfigured (fn?: (event: TClientEventsStreamData<TLogMinterConfiguredParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogMinterConfiguredParameters>> {
        return this.$onLog('MinterConfigured', fn);
    }

    onMinterRemoved (fn?: (event: TClientEventsStreamData<TLogMinterRemovedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogMinterRemovedParameters>> {
        return this.$onLog('MinterRemoved', fn);
    }

    onOwnershipTransferred (fn?: (event: TClientEventsStreamData<TLogOwnershipTransferredParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogOwnershipTransferredParameters>> {
        return this.$onLog('OwnershipTransferred', fn);
    }

    onPause (fn?: (event: TClientEventsStreamData<TLogPauseParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogPauseParameters>> {
        return this.$onLog('Pause', fn);
    }

    onPauserChanged (fn?: (event: TClientEventsStreamData<TLogPauserChangedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogPauserChangedParameters>> {
        return this.$onLog('PauserChanged', fn);
    }

    onRescuerChanged (fn?: (event: TClientEventsStreamData<TLogRescuerChangedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogRescuerChangedParameters>> {
        return this.$onLog('RescuerChanged', fn);
    }

    onTransfer (fn?: (event: TClientEventsStreamData<TLogTransferParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogTransferParameters>> {
        return this.$onLog('Transfer', fn);
    }

    onUnBlacklisted (fn?: (event: TClientEventsStreamData<TLogUnBlacklistedParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogUnBlacklistedParameters>> {
        return this.$onLog('UnBlacklisted', fn);
    }

    onUnpause (fn?: (event: TClientEventsStreamData<TLogUnpauseParameters>) => void): ClientEventsStream<TClientEventsStreamData<TLogUnpauseParameters>> {
        return this.$onLog('Unpause', fn);
    }

    extractLogsApproval (tx: TransactionReceipt): ITxLogItem<TLogApproval>[] {
        let abi = this.$getAbiItem('event', 'Approval');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogApproval>[];
    }

    extractLogsAuthorizationCanceled (tx: TransactionReceipt): ITxLogItem<TLogAuthorizationCanceled>[] {
        let abi = this.$getAbiItem('event', 'AuthorizationCanceled');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogAuthorizationCanceled>[];
    }

    extractLogsAuthorizationUsed (tx: TransactionReceipt): ITxLogItem<TLogAuthorizationUsed>[] {
        let abi = this.$getAbiItem('event', 'AuthorizationUsed');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogAuthorizationUsed>[];
    }

    extractLogsBlacklisted (tx: TransactionReceipt): ITxLogItem<TLogBlacklisted>[] {
        let abi = this.$getAbiItem('event', 'Blacklisted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogBlacklisted>[];
    }

    extractLogsBlacklisterChanged (tx: TransactionReceipt): ITxLogItem<TLogBlacklisterChanged>[] {
        let abi = this.$getAbiItem('event', 'BlacklisterChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogBlacklisterChanged>[];
    }

    extractLogsBurn (tx: TransactionReceipt): ITxLogItem<TLogBurn>[] {
        let abi = this.$getAbiItem('event', 'Burn');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogBurn>[];
    }

    extractLogsMasterMinterChanged (tx: TransactionReceipt): ITxLogItem<TLogMasterMinterChanged>[] {
        let abi = this.$getAbiItem('event', 'MasterMinterChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogMasterMinterChanged>[];
    }

    extractLogsMint (tx: TransactionReceipt): ITxLogItem<TLogMint>[] {
        let abi = this.$getAbiItem('event', 'Mint');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogMint>[];
    }

    extractLogsMinterConfigured (tx: TransactionReceipt): ITxLogItem<TLogMinterConfigured>[] {
        let abi = this.$getAbiItem('event', 'MinterConfigured');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogMinterConfigured>[];
    }

    extractLogsMinterRemoved (tx: TransactionReceipt): ITxLogItem<TLogMinterRemoved>[] {
        let abi = this.$getAbiItem('event', 'MinterRemoved');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogMinterRemoved>[];
    }

    extractLogsOwnershipTransferred (tx: TransactionReceipt): ITxLogItem<TLogOwnershipTransferred>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogOwnershipTransferred>[];
    }

    extractLogsPause (tx: TransactionReceipt): ITxLogItem<TLogPause>[] {
        let abi = this.$getAbiItem('event', 'Pause');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogPause>[];
    }

    extractLogsPauserChanged (tx: TransactionReceipt): ITxLogItem<TLogPauserChanged>[] {
        let abi = this.$getAbiItem('event', 'PauserChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogPauserChanged>[];
    }

    extractLogsRescuerChanged (tx: TransactionReceipt): ITxLogItem<TLogRescuerChanged>[] {
        let abi = this.$getAbiItem('event', 'RescuerChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogRescuerChanged>[];
    }

    extractLogsTransfer (tx: TransactionReceipt): ITxLogItem<TLogTransfer>[] {
        let abi = this.$getAbiItem('event', 'Transfer');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogTransfer>[];
    }

    extractLogsUnBlacklisted (tx: TransactionReceipt): ITxLogItem<TLogUnBlacklisted>[] {
        let abi = this.$getAbiItem('event', 'UnBlacklisted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogUnBlacklisted>[];
    }

    extractLogsUnpause (tx: TransactionReceipt): ITxLogItem<TLogUnpause>[] {
        let abi = this.$getAbiItem('event', 'Unpause');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TLogUnpause>[];
    }

    async getPastLogsApproval (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { owner?: TAddress,spender?: TAddress }
    }): Promise<ITxLogItem<TLogApproval>[]> {
        let topic = '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925';
        let abi = this.$getAbiItem('event', 'Approval');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsAuthorizationCanceled (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { authorizer?: TAddress,nonce?: TBufferLike }
    }): Promise<ITxLogItem<TLogAuthorizationCanceled>[]> {
        let topic = '0x1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d81';
        let abi = this.$getAbiItem('event', 'AuthorizationCanceled');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsAuthorizationUsed (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { authorizer?: TAddress,nonce?: TBufferLike }
    }): Promise<ITxLogItem<TLogAuthorizationUsed>[]> {
        let topic = '0x98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a5';
        let abi = this.$getAbiItem('event', 'AuthorizationUsed');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsBlacklisted (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { _account?: TAddress }
    }): Promise<ITxLogItem<TLogBlacklisted>[]> {
        let topic = '0xffa4e6181777692565cf28528fc88fd1516ea86b56da075235fa575af6a4b855';
        let abi = this.$getAbiItem('event', 'Blacklisted');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsBlacklisterChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { newBlacklister?: TAddress }
    }): Promise<ITxLogItem<TLogBlacklisterChanged>[]> {
        let topic = '0xc67398012c111ce95ecb7429b933096c977380ee6c421175a71a4a4c6c88c06e';
        let abi = this.$getAbiItem('event', 'BlacklisterChanged');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsBurn (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { burner?: TAddress }
    }): Promise<ITxLogItem<TLogBurn>[]> {
        let topic = '0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5';
        let abi = this.$getAbiItem('event', 'Burn');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsMasterMinterChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { newMasterMinter?: TAddress }
    }): Promise<ITxLogItem<TLogMasterMinterChanged>[]> {
        let topic = '0xdb66dfa9c6b8f5226fe9aac7e51897ae8ee94ac31dc70bb6c9900b2574b707e6';
        let abi = this.$getAbiItem('event', 'MasterMinterChanged');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsMint (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { minter?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TLogMint>[]> {
        let topic = '0xab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f8';
        let abi = this.$getAbiItem('event', 'Mint');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsMinterConfigured (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { minter?: TAddress }
    }): Promise<ITxLogItem<TLogMinterConfigured>[]> {
        let topic = '0x46980fca912ef9bcdbd36877427b6b90e860769f604e89c0e67720cece530d20';
        let abi = this.$getAbiItem('event', 'MinterConfigured');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsMinterRemoved (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { oldMinter?: TAddress }
    }): Promise<ITxLogItem<TLogMinterRemoved>[]> {
        let topic = '0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692';
        let abi = this.$getAbiItem('event', 'MinterRemoved');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsOwnershipTransferred (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TLogOwnershipTransferred>[]> {
        let topic = '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0';
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsPause (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TLogPause>[]> {
        let topic = '0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625';
        let abi = this.$getAbiItem('event', 'Pause');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsPauserChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { newAddress?: TAddress }
    }): Promise<ITxLogItem<TLogPauserChanged>[]> {
        let topic = '0xb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a604';
        let abi = this.$getAbiItem('event', 'PauserChanged');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsRescuerChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { newRescuer?: TAddress }
    }): Promise<ITxLogItem<TLogRescuerChanged>[]> {
        let topic = '0xe475e580d85111348e40d8ca33cfdd74c30fe1655c2d8537a13abc10065ffa5a';
        let abi = this.$getAbiItem('event', 'RescuerChanged');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsTransfer (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { from?: TAddress,to?: TAddress }
    }): Promise<ITxLogItem<TLogTransfer>[]> {
        let topic = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
        let abi = this.$getAbiItem('event', 'Transfer');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsUnBlacklisted (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { _account?: TAddress }
    }): Promise<ITxLogItem<TLogUnBlacklisted>[]> {
        let topic = '0x117e3210bb9aa7d9baff172026820255c6f6c30ba8999d1c2fd88e2848137c4e';
        let abi = this.$getAbiItem('event', 'UnBlacklisted');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    async getPastLogsUnpause (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TLogUnpause>[]> {
        let topic = '0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33';
        let abi = this.$getAbiItem('event', 'Unpause');
        let filters = await this.$getPastLogsFilters(abi, {
            topic,
            ...options
        });
        let logs= await this.$getPastLogs(filters);
        return logs.map(log => this.$extractLog(log, abi)) as any;
    }

    abi: AbiItem[] = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklister","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenCurrency","type":"string"},{"internalType":"uint8","name":"tokenDecimals","type":"uint8"},{"internalType":"address","name":"newMasterMinter","type":"address"},{"internalType":"address","name":"newPauser","type":"address"},{"internalType":"address","name":"newBlacklister","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"initializeV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lostAndFound","type":"address"}],"name":"initializeV2_1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRescuer","type":"address"}],"name":"updateRescuer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

    storage = new USDCStorageReader(this.address, this.client, this.explorer);
}

type TSender = TAccount & {
    value?: string | number | bigint
}

    type TLogApproval = {
        owner: TAddress, spender: TAddress, value: bigint
    };
    type TLogApprovalParameters = [ owner: TAddress, spender: TAddress, value: bigint ];
    type TLogAuthorizationCanceled = {
        authorizer: TAddress, nonce: TBufferLike
    };
    type TLogAuthorizationCanceledParameters = [ authorizer: TAddress, nonce: TBufferLike ];
    type TLogAuthorizationUsed = {
        authorizer: TAddress, nonce: TBufferLike
    };
    type TLogAuthorizationUsedParameters = [ authorizer: TAddress, nonce: TBufferLike ];
    type TLogBlacklisted = {
        _account: TAddress
    };
    type TLogBlacklistedParameters = [ _account: TAddress ];
    type TLogBlacklisterChanged = {
        newBlacklister: TAddress
    };
    type TLogBlacklisterChangedParameters = [ newBlacklister: TAddress ];
    type TLogBurn = {
        burner: TAddress, amount: bigint
    };
    type TLogBurnParameters = [ burner: TAddress, amount: bigint ];
    type TLogMasterMinterChanged = {
        newMasterMinter: TAddress
    };
    type TLogMasterMinterChangedParameters = [ newMasterMinter: TAddress ];
    type TLogMint = {
        minter: TAddress, to: TAddress, amount: bigint
    };
    type TLogMintParameters = [ minter: TAddress, to: TAddress, amount: bigint ];
    type TLogMinterConfigured = {
        minter: TAddress, minterAllowedAmount: bigint
    };
    type TLogMinterConfiguredParameters = [ minter: TAddress, minterAllowedAmount: bigint ];
    type TLogMinterRemoved = {
        oldMinter: TAddress
    };
    type TLogMinterRemovedParameters = [ oldMinter: TAddress ];
    type TLogOwnershipTransferred = {
        previousOwner: TAddress, newOwner: TAddress
    };
    type TLogOwnershipTransferredParameters = [ previousOwner: TAddress, newOwner: TAddress ];
    type TLogPause = {
        
    };
    type TLogPauseParameters = [  ];
    type TLogPauserChanged = {
        newAddress: TAddress
    };
    type TLogPauserChangedParameters = [ newAddress: TAddress ];
    type TLogRescuerChanged = {
        newRescuer: TAddress
    };
    type TLogRescuerChangedParameters = [ newRescuer: TAddress ];
    type TLogTransfer = {
        from: TAddress, to: TAddress, value: bigint
    };
    type TLogTransferParameters = [ from: TAddress, to: TAddress, value: bigint ];
    type TLogUnBlacklisted = {
        _account: TAddress
    };
    type TLogUnBlacklistedParameters = [ _account: TAddress ];
    type TLogUnpause = {
        
    };
    type TLogUnpauseParameters = [  ];

interface IEvents {
  Approval: TLogApprovalParameters
  AuthorizationCanceled: TLogAuthorizationCanceledParameters
  AuthorizationUsed: TLogAuthorizationUsedParameters
  Blacklisted: TLogBlacklistedParameters
  BlacklisterChanged: TLogBlacklisterChangedParameters
  Burn: TLogBurnParameters
  MasterMinterChanged: TLogMasterMinterChangedParameters
  Mint: TLogMintParameters
  MinterConfigured: TLogMinterConfiguredParameters
  MinterRemoved: TLogMinterRemovedParameters
  OwnershipTransferred: TLogOwnershipTransferredParameters
  Pause: TLogPauseParameters
  PauserChanged: TLogPauserChangedParameters
  RescuerChanged: TLogRescuerChangedParameters
  Transfer: TLogTransferParameters
  UnBlacklisted: TLogUnBlacklistedParameters
  Unpause: TLogUnpauseParameters
  '*': any[] 
}



interface IMethodCANCEL_AUTHORIZATION_TYPEHASH {
  method: "CANCEL_AUTHORIZATION_TYPEHASH"
  arguments: [  ]
}

interface IMethodDOMAIN_SEPARATOR {
  method: "DOMAIN_SEPARATOR"
  arguments: [  ]
}

interface IMethodPERMIT_TYPEHASH {
  method: "PERMIT_TYPEHASH"
  arguments: [  ]
}

interface IMethodRECEIVE_WITH_AUTHORIZATION_TYPEHASH {
  method: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH"
  arguments: [  ]
}

interface IMethodTRANSFER_WITH_AUTHORIZATION_TYPEHASH {
  method: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH"
  arguments: [  ]
}

interface IMethodAllowance {
  method: "allowance"
  arguments: [ owner: TAddress, spender: TAddress ]
}

interface IMethodApprove {
  method: "approve"
  arguments: [ spender: TAddress, value: bigint ]
}

interface IMethodAuthorizationState {
  method: "authorizationState"
  arguments: [ authorizer: TAddress, nonce: TBufferLike ]
}

interface IMethodBalanceOf {
  method: "balanceOf"
  arguments: [ account: TAddress ]
}

interface IMethodBlacklist {
  method: "blacklist"
  arguments: [ _account: TAddress ]
}

interface IMethodBlacklister {
  method: "blacklister"
  arguments: [  ]
}

interface IMethodBurn {
  method: "burn"
  arguments: [ _amount: bigint ]
}

interface IMethodCancelAuthorization {
  method: "cancelAuthorization"
  arguments: [ authorizer: TAddress, nonce: TBufferLike, v: number, r: TBufferLike, s: TBufferLike ]
}

interface IMethodConfigureMinter {
  method: "configureMinter"
  arguments: [ minter: TAddress, minterAllowedAmount: bigint ]
}

interface IMethodCurrency {
  method: "currency"
  arguments: [  ]
}

interface IMethodDecimals {
  method: "decimals"
  arguments: [  ]
}

interface IMethodDecreaseAllowance {
  method: "decreaseAllowance"
  arguments: [ spender: TAddress, decrement: bigint ]
}

interface IMethodIncreaseAllowance {
  method: "increaseAllowance"
  arguments: [ spender: TAddress, increment: bigint ]
}

interface IMethodInitialize {
  method: "initialize"
  arguments: [ tokenName: string, tokenSymbol: string, tokenCurrency: string, tokenDecimals: number, newMasterMinter: TAddress, newPauser: TAddress, newBlacklister: TAddress, newOwner: TAddress ]
}

interface IMethodInitializeV2 {
  method: "initializeV2"
  arguments: [ newName: string ]
}

interface IMethodInitializeV2_1 {
  method: "initializeV2_1"
  arguments: [ lostAndFound: TAddress ]
}

interface IMethodIsBlacklisted {
  method: "isBlacklisted"
  arguments: [ _account: TAddress ]
}

interface IMethodIsMinter {
  method: "isMinter"
  arguments: [ account: TAddress ]
}

interface IMethodMasterMinter {
  method: "masterMinter"
  arguments: [  ]
}

interface IMethodMint {
  method: "mint"
  arguments: [ _to: TAddress, _amount: bigint ]
}

interface IMethodMinterAllowance {
  method: "minterAllowance"
  arguments: [ minter: TAddress ]
}

interface IMethodName {
  method: "name"
  arguments: [  ]
}

interface IMethodNonces {
  method: "nonces"
  arguments: [ owner: TAddress ]
}

interface IMethodOwner {
  method: "owner"
  arguments: [  ]
}

interface IMethodPause {
  method: "pause"
  arguments: [  ]
}

interface IMethodPaused {
  method: "paused"
  arguments: [  ]
}

interface IMethodPauser {
  method: "pauser"
  arguments: [  ]
}

interface IMethodPermit {
  method: "permit"
  arguments: [ owner: TAddress, spender: TAddress, value: bigint, deadline: bigint, v: number, r: TBufferLike, s: TBufferLike ]
}

interface IMethodReceiveWithAuthorization {
  method: "receiveWithAuthorization"
  arguments: [ from: TAddress, to: TAddress, value: bigint, validAfter: bigint, validBefore: bigint, nonce: TBufferLike, v: number, r: TBufferLike, s: TBufferLike ]
}

interface IMethodRemoveMinter {
  method: "removeMinter"
  arguments: [ minter: TAddress ]
}

interface IMethodRescueERC20 {
  method: "rescueERC20"
  arguments: [ tokenContract: TAddress, to: TAddress, amount: bigint ]
}

interface IMethodRescuer {
  method: "rescuer"
  arguments: [  ]
}

interface IMethodSymbol {
  method: "symbol"
  arguments: [  ]
}

interface IMethodTotalSupply {
  method: "totalSupply"
  arguments: [  ]
}

interface IMethodTransfer {
  method: "transfer"
  arguments: [ to: TAddress, value: bigint ]
}

interface IMethodTransferFrom {
  method: "transferFrom"
  arguments: [ from: TAddress, to: TAddress, value: bigint ]
}

interface IMethodTransferOwnership {
  method: "transferOwnership"
  arguments: [ newOwner: TAddress ]
}

interface IMethodTransferWithAuthorization {
  method: "transferWithAuthorization"
  arguments: [ from: TAddress, to: TAddress, value: bigint, validAfter: bigint, validBefore: bigint, nonce: TBufferLike, v: number, r: TBufferLike, s: TBufferLike ]
}

interface IMethodUnBlacklist {
  method: "unBlacklist"
  arguments: [ _account: TAddress ]
}

interface IMethodUnpause {
  method: "unpause"
  arguments: [  ]
}

interface IMethodUpdateBlacklister {
  method: "updateBlacklister"
  arguments: [ _newBlacklister: TAddress ]
}

interface IMethodUpdateMasterMinter {
  method: "updateMasterMinter"
  arguments: [ _newMasterMinter: TAddress ]
}

interface IMethodUpdatePauser {
  method: "updatePauser"
  arguments: [ _newPauser: TAddress ]
}

interface IMethodUpdateRescuer {
  method: "updateRescuer"
  arguments: [ newRescuer: TAddress ]
}

interface IMethodVersion {
  method: "version"
  arguments: [  ]
}

interface IMethods {
  CANCEL_AUTHORIZATION_TYPEHASH: IMethodCANCEL_AUTHORIZATION_TYPEHASH
  DOMAIN_SEPARATOR: IMethodDOMAIN_SEPARATOR
  PERMIT_TYPEHASH: IMethodPERMIT_TYPEHASH
  RECEIVE_WITH_AUTHORIZATION_TYPEHASH: IMethodRECEIVE_WITH_AUTHORIZATION_TYPEHASH
  TRANSFER_WITH_AUTHORIZATION_TYPEHASH: IMethodTRANSFER_WITH_AUTHORIZATION_TYPEHASH
  allowance: IMethodAllowance
  approve: IMethodApprove
  authorizationState: IMethodAuthorizationState
  balanceOf: IMethodBalanceOf
  blacklist: IMethodBlacklist
  blacklister: IMethodBlacklister
  burn: IMethodBurn
  cancelAuthorization: IMethodCancelAuthorization
  configureMinter: IMethodConfigureMinter
  currency: IMethodCurrency
  decimals: IMethodDecimals
  decreaseAllowance: IMethodDecreaseAllowance
  increaseAllowance: IMethodIncreaseAllowance
  initialize: IMethodInitialize
  initializeV2: IMethodInitializeV2
  initializeV2_1: IMethodInitializeV2_1
  isBlacklisted: IMethodIsBlacklisted
  isMinter: IMethodIsMinter
  masterMinter: IMethodMasterMinter
  mint: IMethodMint
  minterAllowance: IMethodMinterAllowance
  name: IMethodName
  nonces: IMethodNonces
  owner: IMethodOwner
  pause: IMethodPause
  paused: IMethodPaused
  pauser: IMethodPauser
  permit: IMethodPermit
  receiveWithAuthorization: IMethodReceiveWithAuthorization
  removeMinter: IMethodRemoveMinter
  rescueERC20: IMethodRescueERC20
  rescuer: IMethodRescuer
  symbol: IMethodSymbol
  totalSupply: IMethodTotalSupply
  transfer: IMethodTransfer
  transferFrom: IMethodTransferFrom
  transferOwnership: IMethodTransferOwnership
  transferWithAuthorization: IMethodTransferWithAuthorization
  unBlacklist: IMethodUnBlacklist
  unpause: IMethodUnpause
  updateBlacklister: IMethodUpdateBlacklister
  updateMasterMinter: IMethodUpdateMasterMinter
  updatePauser: IMethodUpdatePauser
  updateRescuer: IMethodUpdateRescuer
  version: IMethodVersion
  '*': { method: string, arguments: any[] } 
}





class USDCStorageReader extends ContractStorageReaderBase {
    constructor(
        public address: TAddress,
        public client: Web3Client,
        public explorer: IBlockChainExplorer,
    ) {
        super(address, client, explorer);

        this.$createHandler(this.$slots);
    }

    async _owner(): Promise<TAddress> {
        return this.$storage.get(['_owner', ]);
    }

    async pauser(): Promise<TAddress> {
        return this.$storage.get(['pauser', ]);
    }

    async paused(): Promise<boolean> {
        return this.$storage.get(['paused', ]);
    }

    async blacklister(): Promise<TAddress> {
        return this.$storage.get(['blacklister', ]);
    }

    async blacklisted(key: TAddress): Promise<boolean> {
        return this.$storage.get(['blacklisted', key]);
    }

    async name(): Promise<string> {
        return this.$storage.get(['name', ]);
    }

    async symbol(): Promise<string> {
        return this.$storage.get(['symbol', ]);
    }

    async decimals(): Promise<number> {
        return this.$storage.get(['decimals', ]);
    }

    async currency(): Promise<string> {
        return this.$storage.get(['currency', ]);
    }

    async masterMinter(): Promise<TAddress> {
        return this.$storage.get(['masterMinter', ]);
    }

    async initialized(): Promise<boolean> {
        return this.$storage.get(['initialized', ]);
    }

    async balances(key: TAddress): Promise<bigint> {
        return this.$storage.get(['balances', key]);
    }

    async allowed(key: TAddress): Promise<Record<TAddress, bigint>> {
        return this.$storage.get(['allowed', key]);
    }

    async totalSupply_(): Promise<bigint> {
        return this.$storage.get(['totalSupply_', ]);
    }

    async minters(key: TAddress): Promise<boolean> {
        return this.$storage.get(['minters', key]);
    }

    async minterAllowed(key: TAddress): Promise<bigint> {
        return this.$storage.get(['minterAllowed', key]);
    }

    async _rescuer(): Promise<TAddress> {
        return this.$storage.get(['_rescuer', ]);
    }

    async DOMAIN_SEPARATOR(): Promise<TBufferLike> {
        return this.$storage.get(['DOMAIN_SEPARATOR', ]);
    }

    async _authorizationStates(key: TAddress): Promise<Record<TBufferLike, boolean>> {
        return this.$storage.get(['_authorizationStates', key]);
    }

    async _permitNonces(key: TAddress): Promise<bigint> {
        return this.$storage.get(['_permitNonces', key]);
    }

    async _initializedVersion(): Promise<number> {
        return this.$storage.get(['_initializedVersion', ]);
    }

    $slots = [
    {
        "slot": 0,
        "position": 0,
        "name": "_owner",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 1,
        "position": 0,
        "name": "pauser",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 1,
        "position": 160,
        "name": "paused",
        "size": 8,
        "type": "bool"
    },
    {
        "slot": 2,
        "position": 0,
        "name": "blacklister",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 3,
        "position": 0,
        "name": "blacklisted",
        "size": null,
        "type": "mapping(address => bool)"
    },
    {
        "slot": 4,
        "position": 0,
        "name": "name",
        "size": null,
        "type": "string"
    },
    {
        "slot": 5,
        "position": 0,
        "name": "symbol",
        "size": null,
        "type": "string"
    },
    {
        "slot": 6,
        "position": 0,
        "name": "decimals",
        "size": 8,
        "type": "uint8"
    },
    {
        "slot": 7,
        "position": 0,
        "name": "currency",
        "size": null,
        "type": "string"
    },
    {
        "slot": 8,
        "position": 0,
        "name": "masterMinter",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 8,
        "position": 160,
        "name": "initialized",
        "size": 8,
        "type": "bool"
    },
    {
        "slot": 9,
        "position": 0,
        "name": "balances",
        "size": null,
        "type": "mapping(address => uint256)"
    },
    {
        "slot": 10,
        "position": 0,
        "name": "allowed",
        "size": null,
        "type": "mapping(address => mapping(address => uint256))"
    },
    {
        "slot": 11,
        "position": 0,
        "name": "totalSupply_",
        "size": 256,
        "type": "uint256"
    },
    {
        "slot": 12,
        "position": 0,
        "name": "minters",
        "size": null,
        "type": "mapping(address => bool)"
    },
    {
        "slot": 13,
        "position": 0,
        "name": "minterAllowed",
        "size": null,
        "type": "mapping(address => uint256)"
    },
    {
        "slot": 14,
        "position": 0,
        "name": "_rescuer",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 15,
        "position": 0,
        "name": "DOMAIN_SEPARATOR",
        "size": 256,
        "type": "bytes32"
    },
    {
        "slot": 16,
        "position": 0,
        "name": "_authorizationStates",
        "size": null,
        "type": "mapping(address => mapping(bytes32 => bool))"
    },
    {
        "slot": 17,
        "position": 0,
        "name": "_permitNonces",
        "size": null,
        "type": "mapping(address => uint256)"
    },
    {
        "slot": 18,
        "position": 0,
        "name": "_initializedVersion",
        "size": 8,
        "type": "uint8"
    }
]

}


