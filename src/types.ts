import { IMill, IPubSub } from '@open-oracle-origami/origami-js-sdk'

export type MainConfigDefaults = {
  productIds: string[]
  socketServerUrl?: string
}

export type MainConfig = MainConfigDefaults & {
  press: (sku: string, data: any, timestamp?: number) => IMill
}

export type CoinbaseMillConfig = MainConfigDefaults & {
  id?: string
  emitter?: IPubSub
}
