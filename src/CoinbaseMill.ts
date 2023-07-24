import { Mill, IMill, InitFn } from '@open-oracle-origami/origami-js-sdk'

import main from './main'
import { CoinbaseMillConfig } from './types'

const CoinbaseMill = ({
  id = 'coinbase',
  emitter,
  ...rest
}: CoinbaseMillConfig): IMill => {
  const init: InitFn = ({ press }: IMill) => main({ press, ...rest })

  return Mill.create({ id, emitter, init })
}

export default CoinbaseMill
