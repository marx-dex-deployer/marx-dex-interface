# MarX DEX Interface

[![Tests](https://github.com/marx-dex-deployer/marx-dex-interface/workflows/Tests/badge.svg)](https://github.com/marx-dex-deployer/marx-dex-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for MarX Decentralized Exchange -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [gameland.cc](https://gameland.cc/)
- Interface: [gameland.cc](https://gameland.cc)
- Email: [contact@gameland.cc](mailto:contact@gameland.cc)

## Accessing the MarX DEX Interface

To access the MarX DEX Interface, use an IPFS gateway link from the
[latest release](https://github.com/marx-dex-deployer/marx-dex-interface/releases/latest), 
or visit [gameland.cc](https://gameland.cc).

## Listing a token

Please see the
[@marx-dex-deployer/marx-dex-default-token-list](https://github.com/marx-dex-deployer/marx-dex-default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

