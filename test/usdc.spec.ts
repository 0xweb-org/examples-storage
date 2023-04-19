import { run } from 'shellbee'
import { TestNode } from './TestNode';

async function execute (command: string) {
    let shell = await run({
        command,
        silent: true,
    });
    let stdout = shell.stdout.join('\n');
    return stdout;
}

UTest({
    async $before () {
        await TestNode.start();
    },
    async 'should create accounts' () {
        let stdout = await execute(`atma act ./actions/usdc.act.ts -q "create-accounts"`);
        has_(stdout, /foo.+0x\w{40}/);
        has_(stdout, /bar.+0x\w{40}/);
    },
    async 'should top up foo account' () {
        let stdout = await execute(`atma act ./actions/usdc.act.ts -q "set-balance"`);
        has_(stdout, /50000000000.+wei/);

        stdout = await execute(`0xweb account balance foo USDC --config-accounts ./config/accounts.json --pin hello --chain hardhat`);
        has_(stdout, /Balance.+50000\b/)
    },
    async 'should transfer to bar account' () {
        let stdout = await execute(`atma act ./actions/usdc.act.ts -q "transfer-balance"`);
        has_(stdout, /Send 50000000000 usdc/);

        stdout = await execute(`0xweb account balance bar USDC --config-accounts ./config/accounts.json --pin hello --chain hardhat`);
        has_(stdout, /Balance.+50000\b/)
    }
});
