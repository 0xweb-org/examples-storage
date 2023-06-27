require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@0xweb/hardhat");


module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.2",
                optimizer: {
                    enabled: true,
                    runs: 10
                }
            },
            {
                version: "0.6.12",
                optimizer: {
                    enabled: true,
                    runs: 10
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

