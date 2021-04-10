require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.8.0"
      }
    ]
  },
  networks: {
    hardhat: {
      gasPrice: 225000000000, //470000000000,
      chainId: 43112,
      initialDate: "2020-10-10",
    },
    avash: {
      url: 'http://localhost:9650/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113, //43112,
      accounts: [   //Llaves privadas de las cuentas en Metamask
        "0x5389381eb15b00273cfcf111f1623f2ce09868ac1a433cec43ef8405bf0424de",
        "0x165f1a08349890d226ab70a938070e5153f226df0a37a69eb52797a86c0f7848"
      ]
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [   //Llaves privadas de las cuentas en Metamask
        "0x5389381eb15b00273cfcf111f1623f2ce09868ac1a433cec43ef8405bf0424de",
        "0x165f1a08349890d226ab70a938070e5153f226df0a37a69eb52797a86c0f7848"
      ]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: []
    }
  }
};
