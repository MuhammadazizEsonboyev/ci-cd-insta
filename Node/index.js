let TELEGRAM_BOT_TOKEN = "5791024291:AAEurHdXGg9e_aFlvsGk6Thl5CLHK7GFIFQ"

const TeleBot = require("telebot")
const bot = new TeleBot(TELEGRAM_BOT_TOKEN)

const CronJob = require('cron').CronJob;
const job = new CronJob(
	'0/1 * * * * *',
	function() {
		console.log('You will see this message every 5 seconds');
        chatIds.forEach((chatId) => {
            bot.sendMessage(chatId, "Iltimos darslarni o'z vaqtida qilishga odatlaning chunki iTech Academy dasturchilari boshqa dasturchilarga nisbatan kuchliroq bo'lishlari kerak!")
        })
	},
	null,
	true
);


const chatIds = []
bot.on('text', (msg) => msg.reply.text(msg.text))
bot.on(['/start'], (msg) => {
    console.log(msg)
    let chatId = msg.chat.id
    if(!chatIds.includes(chatId)){
        chatIds.push(chatId)
        msg.reply.text("Boshladik")
        // jop.start()
    }
})

bot.on(['/stop'], (msg) => {
    let chatId = msg.chat.id
    chatIds.pop(chatId)
})

bot.start()