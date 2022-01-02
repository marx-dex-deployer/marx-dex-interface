import React, { useContext } from 'react'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { Version } from '../../hooks/useToggledVersion'
import { YellowCard } from '../Card'
import { AutoColumn } from '../Column'

export default function BetterTradeLink({ version }: { version: Version }) {
  const theme = useContext(ThemeContext)

  return (
    <YellowCard style={{ marginTop: '12px', padding: '8px 4px' }}>
      <AutoColumn gap="sm" justify="center" style={{ alignItems: 'center', textAlign: 'center' }}>
        <Text lineHeight="145.23%;" fontSize={14} fontWeight={400} color={theme.text1}>
        </Text>
      </AutoColumn>
    </YellowCard>
  )
}
