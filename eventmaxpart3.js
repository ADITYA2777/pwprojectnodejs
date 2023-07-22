const eventEmitter = require('events')

const Eventemitter = new eventEmitter()

const SubscribeMessage = (channelName)=>{
console.log(`Thanks for subscribing to ${channelName}`);
}

Eventemitter.addListener("subscribe",SubscribeMessage)

Eventemitter.emit("subscribe",'collage wallah')

console.log(`The default maximum number of event listners are: ${Eventemitter.getMaxListeners()}`
);

Eventemitter.setMaxListeners(5);

console.log(`The updated maximum number of event listners are: ${Eventemitter.getMaxListeners()}`);

