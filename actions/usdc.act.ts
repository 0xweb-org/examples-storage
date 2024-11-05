import { File } from 'atma-io';
import { UAction } from 'atma-utest'
import { ChainAccountService } from '@dequanto/ChainAccountService';
import { HardhatProvider } from '@dequanto/hardhat/HardhatProvider';
import { Config } from '@dequanto/config/Config';
import { USDC } from '@0xc/eth/USDC/USDC';
import { TAccount } from '@dequanto/models/TAccount';
import { $bigint } from '@dequanto/utils/$bigint';
import { l } from '@dequanto/utils/$logger';
import { $require } from '@dequanto/utils/$require';
import { $promise } from '@dequanto/utils/$promise';




let config = await Config.fetch({
    // overrides default path
    "config-accounts": "./config/accounts.json",
    // @Demo The value should be fetched securely
    "pin": "hello"
});

let accounts = new ChainAccountService({ config });
let provider = new HardhatProvider();
let client = provider.client('localhost');


UAction.create({

    /**
     *  Generate two sample accounts. In this demo we will transfer USDC from "foo" to "bar"
     */
    async 'create-accounts' () {

        let [ foo, bar ] = await accounts.createMany(['foo', 'bar'], 'hardhat');

        l`Created 2 accounts in ./config/accounts.json`
        l`foo bold<${foo.address}>`
        l`bar bold<${bar.address}>`
    },

    async 'rpc-info' () {
        console.log(await client.getNodeInfos());
    },

    async 'set-balance' () {
        let foo = await accounts.get('foo');
        console.log(`foo`, foo.address);
        $require.notNull(foo, `"foo" account not found`);

        // First argument is the address - use same address as on mainnet, override only the RPC client
        let usdc = new USDC(void 0, client);
        let balanceBefore = await usdc.storage.balanceAndBlacklistStates(foo.address);
        l`Balance (${foo.address}) yellow<before>: bold<${balanceBefore}> wei`

        // Set balance of
        let decimals = await usdc.decimals();
        console.log(`DECIMALS: ${decimals}`);
        console.log(`DECIMALS: ${decimals}`);
        let amount = $bigint.toWei(50_000, decimals);
        await usdc.storage.$set(`balanceAndBlacklistStates["${foo.address}"]`, amount);
        await $promise.wait(200);
        let balanceAfter = await usdc.balanceOf(foo.address);
        l`Balance green<after>: bold<${balanceAfter}> wei`;
    },

    async 'transfer-balance' () {
        let foo = await accounts.get('foo');
        let bar = await accounts.get('bar');
        $require.notNull(foo, "foo");
        $require.notNull(bar, "bar");
        console.log(`foo`, foo.address);
        console.log(`bar`, bar.address);

        // Fund foo account
        await client.debug.setBalance(foo.address, 10n**18n);

        // First argument is the address - use same address as on mainnet, override only the RPC client
        let usdc = new USDC(void 0, client);

        let barBalance = await usdc.balanceOf(bar.address);
        if (barBalance > 0n) {
            l`Reset bar USDC balance from ${barBalance} to 0`;
            await usdc.storage.$set(`balances["${bar.address}"]`, 0n);
        }

        let fooBalance = await usdc.storage.$get(`balances["${foo.address}"]`);
        l`Send ${fooBalance} usdc`;



        let tx = await usdc.transfer(foo as TAccount, bar.address, fooBalance);
        let receipt = await tx.wait();
    },

    async '!redeploy-with-new-compilation' () {
        let path = '0xweb/eth/USDC/USDC/FiatTokenV2_1.sol';
        let source = await File.readAsync<string>(path);
        /**
         * Simulate file edits by user
         */
        source = source.replaceAll(`_transfer(msg.sender, to, value);`, `_transfer(msg.sender, to, value + 5);`);

        let output = `./test/bin/contracts/USDC.sol`;
        await File.writeAsync(output, source);

        let { bytecode } = await provider.compileSol(output);
        let usdc = new USDC(void 0, client);

        await client.debug.setCode(usdc.address, bytecode);

        let foo = await accounts.get('foo');
        let bar = await accounts.get('bar');

        await client.debug.setBalance(foo.address, 10n ** 18n);

        await usdc.storage.$set(`balances["${foo.address}"]`, 100n);
        await usdc.storage.$set(`balances["${bar.address}"]`, 0n);



        let barBalanceBefore = await usdc.balanceOf(bar.address);
        l`Bar Balance: ${barBalanceBefore}`;

        let fooBalanceBefore = await usdc.balanceOf(foo.address);
        l`Foo Balance: ${fooBalanceBefore}`;

        let tx = await usdc.transfer(foo as TAccount, bar.address, 50n);
        await tx.wait();


        let barBalance = await usdc.balanceOf(bar.address);
        l`Bar Balance: ${barBalance}`;
    }
});
