import WebSocket from 'ws'
import { CallbackFn } from '@open-oracle-origami/origami-js-sdk'

import { MainConfig } from './types'

export default ({
  press,
  productIds,
  socketServerUrl = 'wss://ws-feed.exchange.coinbase.com',
}: MainConfig): CallbackFn<void> => {
  const ws = new WebSocket(socketServerUrl)

  ws.on('open', () => {
    const openMessage = {
      type: 'subscribe',
      product_ids: productIds,
      channels: ['ticker'],
    }

    ws.send(JSON.stringify(openMessage))
  })

  // TODO: Fix types
  ws.on('message', (data: WebSocket.Data) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    const d = JSON.parse(data.toString())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (d.type !== 'ticker') return
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    else if (d.type === 'error') return // TODO: Handle this error, leaving placeholder
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    press(d.product_id, d)
  })

  // TODO: Handle errors somehow...
  ws.on('error', () => {})

  return (): void => {
    ws.terminate()
  }
}
