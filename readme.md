<p align="center">
  <img src="https://github.com/fwd/n2/raw/master/.github/banner.png" alt="N2" width="450" />
</p>

<h2 align="center">Nano PoW Server</h2>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

> This package is in development by [@nano2dev](https://twitter.com/nano2dev). It is recommended for use with bare metal GPU rigs. It can be used in the cloud as well. vCPU PoW is much slower.

## ❯ Install

```
curl -g -d '{ "hash": "E4094A9ABA876DC3EE34042A06E8DF0501BCC578484030FBB11B98EDE3B81D2A" }' '[::1]:7080'
```

```bash
curl -L "https://fwd.github.io/nano-pow/install.sh" | sh
```

## ❯ Usage

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
