import { TestUtils } from './TestUtils';

UTest({
    async $before () {
        await TestUtils.start();
    },
    async 'should create accounts' () {
        let stdout = await TestUtils.execute(`atma act ./actions/usdc.act.ts -q "create-accounts"`);
        has_(stdout, /foo.+0x\w{40}/);
        has_(stdout, /bar.+0x\w{40}/);
    },
    async 'should top up foo account' () {
        let stdout = await TestUtils.execute(`atma act ./actions/usdc.act.ts -q "set-balance"`);
        has_(stdout, /50000000000.+wei/);

        stdout = await TestUtils.execute(`0xweb account balance foo USDC --config-accounts ./config/accounts.json --pin hello --chain hardhat`);
        has_(stdout, /Balance.+50000\b/)
    },
    async 'should transfer to bar account' () {
        let stdout = await TestUtils.execute(`atma act ./actions/usdc.act.ts -q "transfer-balance"`);
        has_(stdout, /Send 50000000000 usdc/);

        stdout = await TestUtils.execute(`0xweb account balance bar USDC --config-accounts ./config/accounts.json --pin hello --chain hardhat`);
        has_(stdout, /Balance.+50000\b/)
    }
});
