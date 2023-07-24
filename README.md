# origami-js-mill-coinbase
This repository contains an Open Oracle Origami JS Mill for Coinbase. 

For best results, use in conjunction with the [Open Oracle Origami JS SDK](https://github.com/open-oracle-origami/origami-js-sdk).

When used with the SDK, this mill provides ticker data from the Coinbase Exchange WebSocket while bringing you one step closer to launching your very own custom Open Oracle Origami Curator Node.

*Any form, any shape. Web3’s modular open oracle.*

---

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

## Quick Start
### Install SDK
```bash
npm install @open-oracle-origami/origami-js-sdk --save
```
### Install Mill
```bash
npm install @open-oracle-origami/origami-js-mill-coinbase --save
```

### Code
The code below demonstrates how to attach a mill to a curator. This is a partial implementation of a curator. To be fully functional, a curator must also plan at least one workshop and one museum. 

For more information on how to use a curator, please see the [Open Oracle Origami JS SDK](https://github.com/open-oracle-origami/origami-js-sdk).
```JavaScript
import { Curator } from '@open-oracle-origami/origami-js-sdk'
import CoinbaseMill from '@open-oracle-origami/origami-js-mill-coinbase'

const curator = Curator.create({ id: 'my-curator' })

const mill = CoinbaseMill({
  productIds: ['BTC-USD']
})

curator.plan(mill).start()
```

This is an example of how to test the mill output.
```JavaScript
import CoinbaseMill from '@open-oracle-origami/origami-js-mill-coinbase'

const mill = CoinbaseMill({
  productIds: ['BTC-USD']
})

mill.start((id, data) => {
  console.log(data)
})
```

## Documentation
Mill currently supports the [Exchange WebSocket](https://docs.cloud.coinbase.com/exchange/docs/websocket-channels#ticker-channel) channel from Coinbase.

### Config

**id** (string): *optional* 
- The id of the mill. Defaults to `mill.coinbase`.

**productIds** (array): *required*
- Product IDs to subscribe to. [Product Id List](https://api.exchange.coinbase.com/products)
 
**socketServerUrl** (string): *optional*
- The Coinbase WebSocket server url. Defaults to `wss://ws-feed.exchange.coinbase.com`.

### Example Config
```JavaScript
const coinbaseMillConfig = {
  id: 'mill.coinbase', // "mill." will always be prepended regardless of what you pass.
  productIds: ['BTC-USD', 'ETH-USD'],
  socketServerUrl: 'wss://ws-feed.exchange.coinbase.com'
}
```

## Contributing
Contributions are always welcome! Our source code is licensed under the MIT License, and contributions are welcome.

See [contributing](https://github.com/open-oracle-origami/origami-js-mill-coinbase/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to our [code of conduct](https://github.com/open-oracle-origami/origami-js-mill-coinbase/blob/main/CODE_OF_CONDUCT.md).

## License
[MIT](https://choosealicense.com/licenses/mit/)

---

*折 お り 紙 がみ (origami), from 折 お り (ori, “to fold”) + 紙 かみ (kami, “paper“)*

[build-img]:https://github.com/open-oracle-origami/origami-js-mill-coinbase/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/open-oracle-origami/origami-js-mill-coinbase/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/@open-oracle-origami/origami-js-mill-coinbase
[downloads-url]:https://npmtrends.com/@open-oracle-origami/origami-js-mill-coinbase
[npm-img]:https://img.shields.io/npm/v/@open-oracle-origami/origami-js-mill-coinbase
[npm-url]:https://www.npmjs.com/package/@open-oracle-origami/origami-js-mill-coinbase
[issues-img]:https://img.shields.io/github/issues/open-oracle-origami/origami-js-mill-coinbase
[issues-url]:https://github.com/open-oracle-origami/origami-js-mill-coinbase/issues
[codecov-img]:https://codecov.io/gh/open-oracle-origami/origami-js-mill-coinbase/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/open-oracle-origami/origami-js-mill-coinbase
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
