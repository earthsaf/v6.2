const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "B4u V6.2"
global.ownerName = "SÄD✓SÃTÄÑ"
global.botNumber = "923492091511"
global.devNumber = ["923492091511"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages
global.Type_Menu = "v1" // TypeMenu v1:IMAGE v2:TEXT V3:TEXT+QSTATUS

global.domain = "https://example.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "OwensDev" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})