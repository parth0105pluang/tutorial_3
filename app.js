const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)
// method returns systems uptime in seocnds
console.log(`The system uptime ${os.uptime()}`)