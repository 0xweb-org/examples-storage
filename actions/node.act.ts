import { $promise } from '@dequanto/utils/$promise';
import { TestUtils } from '../test/TestUtils';
import { UAction } from 'atma-utest';
import { l } from '@dequanto/utils/$logger';

UAction.create({

    async 'Start local Hardhat Node' () {
        await TestUtils.start({ silent: false });
        l`green<Running. > Press gray<CTRL+C> to stop.`;
        await $promise.wait(1_000_000_000);
    }
});
