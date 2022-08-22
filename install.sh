# OpenCL, GCC & Build Tools
sudo apt install ocl-icd-opencl-dev gcc build-essential jq -y

# Rust
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env

# nano-work-server
git clone https://github.com/nanocurrency/nano-work-server.git
cd nano-work-server
cargo build --release

# write out current crontab
sudo crontab -l > cronjob
#echo new cron into cron file
echo "@reboot ~/nano-work-server/target/release/nano-work-server --gpu 0:0" >> cronjob
#install new cron file
sudo crontab cronjob
rm cronjob

if which node > /dev/null; then
    echo "Node is installed. 👍🏽"
else
	curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
	sudo apt -y install nodejs
	npm i -g pm2
fi

# Server
git clone https://github.com/fwd/nano-pow ./nano-work-proxy
cd nano-work-proxy
npm install

npm install -g pm2

sudo pm2 start index.js --name nano-work-proxy
sudo pm2 startup
sudo pm2 save
