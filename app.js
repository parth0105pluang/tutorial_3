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

const path = require('path')
console.log(path.sep)
const filePath = path.join('/content','subfolderr','subfolder.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolderr','subfolder.txt')
console.log(absolute)