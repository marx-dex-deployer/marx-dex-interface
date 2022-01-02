const MARX_DEX_TOKEN_LIST_URL = 'https://unpkg.com/@marx-dex/marx-dex-default-token-list@1.3.2'

export const DEFAULT_TOKEN_LIST_URL = MARX_DEX_TOKEN_LIST_URL

export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_TOKEN_LIST_URL,
  't2crtokens.eth', // kleros
  'tokens.1inch.eth', // 1inch
  'synths.snx.eth',
  'tokenlist.dharma.eth',
  'defi.cmc.eth',
  'erc20.cmc.eth',
  'stablecoin.cmc.eth',
  'tokenlist.zerion.eth',
  'tokenlist.aave.eth',
  'https://app.tryroll.com/tokens.json',
  'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
  'https://defiprime.com/defiprime.tokenlist.json',
  'https://umaproject.org/uma.tokenlist.json'
]
