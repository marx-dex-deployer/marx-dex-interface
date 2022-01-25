import { Currency, ETHER, Token } from '@marx-dex/marx-dex-v2-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'EVMOS'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
