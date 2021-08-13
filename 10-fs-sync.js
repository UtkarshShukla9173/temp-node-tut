//const {readFileSync,writeFileSync}= require('fs');
const f= require('fs');
console.log('start');
const first = f.readFileSync('./content/first.txt','utf8');
const second = f.readFileSync('./content/second.txt','utf8');




f.writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,{flag:'a'});
console.log('done with this task');
console.log('Starting the next one');