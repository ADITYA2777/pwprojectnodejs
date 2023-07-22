
const eventEmitter = require('events')

const Eventemitter = new eventEmitter()

const SubscribeMessage = (channelName)=>{
console.log(`Thanks for subscribing to ${channelName}`);
}

Eventemitter.addListener("subscribe",SubscribeMessage)


console.log('Calling event listner before removing the event.');
Eventemitter.emit("subscribe",'collage wallah')

console.log('Calling event listner after removing the event.');
Eventemitter.removeListener("subscribe",SubscribeMessage)


Eventemitter.emit("subscribe",'collage wallah')
