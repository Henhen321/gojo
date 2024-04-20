//base by DGXeon
//recode by Rapikz
//YouTube: @rapikgimangYT
//Instagram: Rapik_Gimang
//Telegram: t.me/6281312651566

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "czxkuba" //ur yt chanel name
global.socialm = "Henz" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'H-Arv' //ur bot name
global.ownernumber = '6285866034212' //ur owner number
global.ownername = './Henz' //ur owner name
global.websitex = "https://chat.whatsapp.com/"
global.wagc = "https://chat.whatsapp.com/"
global.themeemoji = '🪀'
global.wm = "./Henz"
global.botscript = 'https://chat.whatsapp.com/' //script link
global.packname = "Henz"
global.author = "Henz"
global.creator = "6285866034212@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285866034212"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Succes'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})