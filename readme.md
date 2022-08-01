<p align="center">
  <img src="https://github.com/fwd/n2/raw/master/.github/banner.png" alt="N2" width="450" />
</p>

<h2 align="center">Nano.to PoW Server</h2>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## ❯ Install

```bash
curl -L "https://github.com/fwd/nano-pow/raw/master/install.sh" | sh
```

## ❯ Usage

```javascript
axios.post('http://localhost:PORT', { 
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
