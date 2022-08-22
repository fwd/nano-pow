![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h1 align="center">Nano PoW Server</h1>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

> RPC server for [Nano PoW Worker](https://github.com/nanocurrency/nano-pow-server). **MIT** License. In *alpha-0.5* stage. Which means it does not work at all, yet. Give it a star, and come back in a week or two. Early docs below.

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Install


```bash
curl -L "https://fwd.github.io/nano-pow/install.sh" | sh
```

## ❯ Usage

```bash
curl -g -d '{ "hash": "E4094A9..." }' '[::1]:7080'
```

```javascript
axios.post('http://localhost:7080', { 
    hash: 'HASH'
}).then((res) => {
    // console.log(res.data)
})
```
**Response (JSON):**
```json
{
    "difficulty": "fffffffd316c7962",
    "multiplier": "2.8500801896655417",
    "work": "14b651936a358ddc"
}
```

## ❯ Optional: Sell PoW to Nano.to 

Email: support[at]nano.to for more information.

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## Contributing

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome at [issues page](https://github.com/fwd/nano/issues).

## License

MIT License

Copyright [@nano2dev](https://twitter.com/nano2dev).

## ❯ Stargazers

[![Stargazers over time](https://starchart.cc/fwd/nano.svg)](https://starchart.cc/fwd/nano-pow)
