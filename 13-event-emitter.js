const EventEmitter = require('events');

const customEmitter = new EventEmitter() //  customEmitter instance of class EventEmitter

customEmitter.on('response',(name,id)=>{
    console.log(`data recived ${name} with id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})



//the string inside .on and .emit (i.e -> response) needs to match
customEmitter.emit('response','jhon',34) // fire it onces and all the .on with matching strings will be executed.
// if you place emit before on method then no output because first you need to provide event the you can emit it.
// we can even passs parameters and the on function have these parameters inside its acllback will take it as input and display it.
