const os =require('os')

//info about current user
const user =os.userInfo()
console.log(user)

// return the system up time in seconds
console.log(`The System UPTIME is :  ${os.uptime()} seconds `)

const currentOs = {
    name: os.type(),
    release : os.release(),
    totalMen: os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs)