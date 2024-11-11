import { Config } from '@dequanto/config/Config'
import { ChainAccountService } from '@dequanto/ChainAccountService';
import { HardhatProvider } from '@dequanto/hardhat/HardhatProvider';
import { UAction } from 'atma-utest'
import { File } from 'atma-io'
import { run } from 'shellbee'


let config = await Config.fetch({
    // overrides default path
    "config-accounts": "./config/accounts.json",
    // @Demo The value should be fetched securely
    "pin": "hello"
});

let accounts = new ChainAccountService({ config });
let provider = new HardhatProvider();
let deployer = provider.deployer(1);
let client = provider.client('localhost');
let metaOriginal = './cache/dump/DumpDemo.original.json';
let metaCloned = './cache/dump/DumpDemo.cloned.json';

UAction.create({

    async 'deploy original and configure' () {
        let { contract } = await provider.deploySol('./contracts/DumpDemo.sol', { client });

        let writer = await contract.setValues(deployer, 5, 'Foo');
        await writer.wait();
        await File.writeAsync(metaOriginal, { time: Date.now(), address: contract.address });
    },
    async 'dump original contract' () {
        let { address } = await File.readAsync<{ address }>(metaOriginal);
        let str = await run(`0xweb c dump ${address} --sources ./contracts/DumpDemo.sol --output ./cache/dump/data/DumpDemo --chain hardhat`);
    },
    async 'should redeploy contract' () {
        let { contract } = await provider.deploySol('./contracts/DumpDemo.sol', { client });
        await File.writeAsync(metaCloned, { time: Date.now(), address: contract.address });
    },
    async 'should restore from dump' () {
        let { address } = await File.readAsync<{ address }>(metaCloned)
        let str = await run(`0xweb c dump-restore ${address} --sources ./contracts/DumpDemo.sol --file ./cache/dump/data/DumpDemo.csv --chain hardhat`);
    }

});
