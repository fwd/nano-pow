<a href="https://github.com/fwd/n2" target="_blank">
  <p align="center">
    <img src="https://github.com/fwd/n2/raw/master/.github/banner.png" alt="Prompts" width="500" />
  </p>
</a>

<h1 align="center">Nano PoW Server</h1>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## 0. Pre-requisites

- Ubuntu 18+ 
- GPU Recommended

```bash
# OpenCL, GCC & Build Tools
sudo apt install ocl-icd-opencl-dev gcc build-essential -y

# Rust
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
```

## 1. Install [PoW Worker](https://github.com/nanocurrency/nano-work-server)

```bash
cd ~/
git clone https://github.com/nanocurrency/nano-work-server.git
cd nano-work-server
cargo build --release
```

**Setup Cron**

```bash
# crontab -e
@reboot ~/nano-work-server/target/release/nano-work-server --cpu-threads 4
```

Adjut ```--cpu-threads``` to your needs.

**With GPU**

```
@reboot ~/nano-work-server/target/release/nano-work-server --gpu 0:0
```

Adjust ```--gpu``` to each local device id. Setting up GPUs on Linux is not easy. Don't feel bad if you struggle. 

---

## 2. Install [PoW Proxy](https://github.com/fwd/nano-pow)

```bash
cd ~/
git clone https://github.com/fwd/nano-pow
cd nano-pow
npm install
```

**Create config file**

```bash
nano .env
```

```
NODE=
PORT=
KEY=
DIFF=
```

- **NODE**: URL of NODE or Worker. Default 'http://[::1]:7076'
- **PORT**: Port for Proxy. Default '7080' 
- **KEY**: Access Proxy with API key only.
- **DIFF**: Limit PoW difficulty.

### 3. Run it

```
node index.js
```

If you see ```http://localhost:[PORT]``` printed on the screen. All is well.


### 4. Run it 24/7

```bash
npm install -g pm2
pm2 start index.js --name nano-pow
pm2 startup
pm2 save
```

### 5. Have a beer 🍺

Job well done. You'll start to see payments every hour.

Post your experience on https://reddit.com/r/nanoapi, or Tweet us [@nano2dev](https://twitter.com/nano2dev)

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## Contributing

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome at [issues page](https://github.com/fwd/nano/issues).

## License

MIT License

Copyright © 2022 [@nano2dev](https://twitter.com/nano2dev).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## ❯ Stargazers

[![Stargazers over time](https://starchart.cc/fwd/nano.svg)](https://starchart.cc/fwd/nano-pow)