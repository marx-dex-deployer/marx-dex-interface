import { ChainId } from '@marx-dex/marx-dex-v2-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.EVMOS]: '0x63a019dc29651E0622e3C53CC574Ac741002fE06'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
