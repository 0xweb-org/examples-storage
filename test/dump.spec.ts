import { File } from 'atma-io';
import { TestUtils } from './TestUtils';
import { HardhatProvider } from '@dequanto/hardhat/HardhatProvider';
import { ContractReader } from '@dequanto/contracts/ContractReader';

const provider = new HardhatProvider();
const client = provider.client('localhost');
const metaOriginal = './cache/dump/DumpDemo.original.json';
const metaCloned = './cache/dump/DumpDemo.cloned.json';

UTest({
    $config: {
        timeout: 20_000,
    },
    async $before () {
        await TestUtils.start();
    },
    async 'should install contracts storage' () {
        let stdout = await TestUtils.execute(`atma act ./actions/dump.act.ts -q "deploy original"`);
        let { address } = await File.readAsync<any>(metaOriginal);

        let reader = new ContractReader(client);
        let foo = await reader.readAsync(address, '_foo() returns (uint256)');
        eq_(foo, 5n);

        let name = await reader.readAsync(address, '_name() returns (string)');
        eq_(name, 'Foo');
    },
    async 'should dump contracts storage' () {
        await TestUtils.execute(`atma act ./actions/dump.act.ts -q "dump original"`);
        let json = await File.readAsync('./cache/dump/data/DumpDemo.json');
        has_(json, { _name: 'Foo' });
    },
    async 'should clone contract' () {
        await TestUtils.execute(`atma act ./actions/dump.act.ts -q "redeploy"`);
        let { address } = await File.readAsync<{ address }>(metaCloned);
        let reader = new ContractReader(client);
        let foo = await reader.readAsync(address, '_foo() returns (uint256)');
        eq_(foo, 0n);

        await TestUtils.execute(`atma act ./actions/dump.act.ts -q "restore"`);
        foo = await reader.readAsync(address, '_foo() returns (uint256)');
        eq_(foo, 5n);
    }
});
