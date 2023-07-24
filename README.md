# origami-js-mill-coingecko
This repository contains an Open Oracle Origami JS Mill for CoinGecko. 

For best results, use in conjunction with the [Open Oracle Origami JS SDK](https://github.com/open-oracle-origami/origami-js-sdk).

When used with the SDK, this mill provides price feed data from the CoinGecko Simple Price endpoint while bringing you one step closer to launching your very own custom Open Oracle Origami Curator Node.

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
npm install @open-oracle-origami/origami-js-mill-coingecko --save
```

### Code
The code below demonstrates how to attach a mill to a curator. This is a partial implementation of a curator. To be fully functional, a curator must also plan at least one workshop and one museum. 

For more information on how to use a curator, please see the [Open Oracle Origami JS SDK](https://github.com/open-oracle-origami/origami-js-sdk).
```JavaScript
import { Curator } from '@open-oracle-origami/origami-js-sdk'
import CoinGeckoMill from '@open-oracle-origami/origami-js-mill-coingecko'

const curator = Curator.create({ id: 'my-curator' })

const mill = CoinGeckoMill({
  simplePriceParams: {
    ids: ['bitcoin'],
    vs_currencies: ['usd'],
  },
})

curator.plan(mill).start()
```

This is an example of how to test the mill output.
```JavaScript
import CoinGeckoMill from '@open-oracle-origami/origami-js-mill-coingecko'

const mill = CoinGeckoMill({
  simplePriceParams: {
    ids: ['bitcoin'],
    vs_currencies: ['usd'],
  },
})

mill.start((id, data) => {
  console.log(data)
})
```

## Documentation
Mill currently supports the [Simple Price](https://www.coingecko.com/api/documentations/v3#/simple/get_simple_price) endpoint from CoinGecko.

### Config

> **id** (string): *optional* 
> 
> The id of the mill. Defaults to `mill.coingecko`.
 
> **simplePriceParams** (object): *required*
> 
> An object that contains the following parameters for the CoinGecko [Simple Price](https://www.coingecko.com/api/documentations/v3#/simple/get_simple_price) endpoint.
> 
> - **ids** (string or array): *required*  
>   - Ids of the tokens or coins to query. [Id List](https://www.coingecko.com/api/documentations/v3#/coins/get_coins_list)
> - **vs_currencies** (string or array): *required* 
>   - Currencies of each token or coin to fetch. [Currency List](https://www.coingecko.com/api/documentations/v3#/simple/get_simple_supported_vs_currencies)
> - **include_market_cap** (boolean): *optional*
>   - Include market cap in the response. Defaults to `false`.
> - **include_24hr_vol** (boolean): *optional*
>   - Include 24hr volume in the response. Defaults to `false`.
> - **include_24hr_change** (boolean): *optional*
>   - Include 24hr change in the response. Defaults to `false`.
> - **include_last_updated_at** (boolean): *optional*
>   - Include last updated at timestamp in the response. Defaults to `false`.

> **interval** (number): *optional*
> 
> Polling interval in milliseconds. Defaults to `5000` (5 Seconds).

> **timeout** (number): *optional*
> 
> Mill timeout in milliseconds. Defaults to `10000` (10 Seconds).

> **autoRetry** (boolean): *optional*
>
> Auto retry if the http response code is 429 (too many requests). Defaults to `true`.

> **apiKey** (string): *optional*
>
> Api key for CoinGecko paid versions with higher rate limits. [More Info](https://www.coingecko.com/en/api/pricing)

### Example Config
```JavaScript
const coinGeckoMillConfig = {
  id: 'mill.coingecko', // "mill." will always be prepended regardless of what you pass.
  simplePriceParams: {
    ids: ['bitcoin'],
    vs_currencies: ['usd'],
    include_market_cap: false,
    include_24hr_vol: false,
    include_24hr_change: false,
    include_last_updated_at: false, 
  },
  interval: 5000,
  timeout: 10000,
  autoRetry: true,
  apiKey: 'my-api-key',
}
```

## Contributing
Contributions are always welcome! Our source code is licensed under the MIT License, and contributions are welcome.

See [contributing](https://github.com/open-oracle-origami/origami-js-mill-coingecko/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to our [code of conduct](https://github.com/open-oracle-origami/origami-js-mill-coingecko/blob/main/CODE_OF_CONDUCT.md).

## License
[MIT](https://choosealicense.com/licenses/mit/)

---

*折 お り 紙 がみ (origami), from 折 お り (ori, “to fold”) + 紙 かみ (kami, “paper“)*

[build-img]:https://github.com/open-oracle-origami/origami-js-mill-coingecko/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/open-oracle-origami/origami-js-mill-coingecko/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/@open-oracle-origami/origami-js-mill-coingecko
[downloads-url]:https://npmtrends.com/@open-oracle-origami/origami-js-mill-coingecko
[npm-img]:https://img.shields.io/npm/v/@open-oracle-origami/origami-js-mill-coingecko
[npm-url]:https://www.npmjs.com/package/@open-oracle-origami/origami-js-mill-coingecko
[issues-img]:https://img.shields.io/github/issues/open-oracle-origami/origami-js-mill-coingecko
[issues-url]:https://github.com/open-oracle-origami/origami-js-mill-coingecko/issues
[codecov-img]:https://codecov.io/gh/open-oracle-origami/origami-js-mill-coingecko/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/open-oracle-origami/origami-js-mill-coingecko
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
