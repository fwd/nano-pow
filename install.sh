# OpenCL, GCC & Build Tools
sudo apt install ocl-icd-opencl-dev gcc build-essential jq -y
# Rust
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env

cd ~/
git clone https://github.com/nanocurrency/nano-work-server.git
cd nano-work-server
cargo build --release

#write out current crontab
sudo crontab -l > cronjob
#echo new cron into cron file
echo "@reboot ~/nano-work-server/target/release/nano-work-server --gpu 0:0" >> cronjob
#install new cron file
sudo crontab cronjob
rm cronjob

# Server
cd ~/
git clone https://github.com/fwd/nano-pow
cd nano-pow
npm install

cat <<EOT >> .env
PORT=7080
NAME=$(uuidgen | cut -f1 -d"-")
SECRET=$(uuidgen | cut -f1 -d"-")
EOT

npm install -g pm2
suod pm2 start index.js --name nano-pow
suod pm2 startup
suod m2 save