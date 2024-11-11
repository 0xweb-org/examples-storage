




require("@0xweb/hardhat");


module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.2",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
        ]
    },
    networks: {
        hardhat: {
            chainId: 1337,
            forking: {
                url: "https://rpc.ankr.com/eth",
            }
        }
    }
};

