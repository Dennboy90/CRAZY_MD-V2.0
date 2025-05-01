/*𝐁𝐚𝐬𝐞 𝐛𝐲 𝐃𝐚𝐯𝐢𝐝 𝐓𝐞𝐜𝐡 𝐂𝐡𝐮𝐝𝐝𝐲 𝐁𝐮𝐝𝐝𝐲 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 



- 𝐜𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C



- 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐫: wa.me/24105730123
*/

const fs = require('fs')

const addAfkUser = (userId, time, reason, _dir) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./database/afk-user.json', JSON.stringify(_dir, null, 2))
}
const checkAfkUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}
const getAfkReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].reason
    }
}
const getAfkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}
const getAfkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}
const getAfkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}
module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
}