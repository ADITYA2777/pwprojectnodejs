

const { subscribe } = require('diagnostics_channel');
const eventEmitter = require('events')

const Eventemitter = new eventEmitter()

const SubscribeMessage = (channelName)=>{
console.log(`Thanks for subscribing to ${channelName}`);
}

Eventemitter.addListener("subscribe",SubscribeMessage)

Eventemitter.emit("subscribe",'collage wallah')