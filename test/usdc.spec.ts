import { TestUtils } from './TestUtils';


UTest({
    async $before () {
        await TestUtils.start();
    },
    async 'should create accounts' () {
        var { stdout } = await TestUtils.execute(`npx atma act ./actions/usdc.act.ts -q "create-accounts"`);
        has_(stdout, /foo.+0x\w{40}/);
        has_(stdout, /bar.+0x\w{40}/);
    },
    async 'should get current block' () {
        let { stdout, stderr } = await TestUtils.execute(`npx 0xweb block get latest --chain hardhat --no-color`);
        has_(stdout, /Block\s+\d+/);
    },
    async 'should top up foo account' () {
        var { stdout }  = await TestUtils.execute(`npx atma act ./actions/usdc.act.ts -q "set-balance"`);
        has_(stdout, /50000000000.+wei/);

        var { stdout } = await TestUtils.execute(`npx 0xweb account balance foo USDC --config-accounts ./config/accounts.json --pin hello --chain hardhat`);
        has_(stdout, /Balance.+50000\b/)
    },
    async 'should transfer to bar account' () {
        var { stdout }  = await TestUtils.execute(`npx atma act ./actions/usdc.act.ts -q "transfer-balance"`);
        has_(stdout, /Send 50000 usdc/);

        var { stdout }  = await TestUtils.execute(`npx 0xweb account balance bar USDC --config-accounts ./config/accounts.json --pin hello --chain hardhat`);
        has_(stdout, /Balance.+50000\b/)
    }
});
