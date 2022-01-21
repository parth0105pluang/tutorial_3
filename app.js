const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)
// method returns systems uptime in seocnds
console.log(`The system uptime ${os.uptime()}`)
const currOS={
    name:os.type(),
    release: os.release(),
    freeMem: os.freemem()
}
console.log(currOS.name)