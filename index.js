const {Telegraf}= require('telegraf')
const bot = new Telegraf('5199390277:AAHZQATox8MeF6relM24is5fnP2r4na8E4M')
bot.start((context) => {
	console.log('Servizio avviato...')
	context.reply('Servizio ECHO avviato')
})
bot.hears('Ciao',context => {
	console.log (context)
	context.reply('Ciao '+context.update.message.from.first_name+' '+context.update.message.from.last_name)
})
/*
bot.on('text', context=>{
	text=context.update.message.text
  	context.reply('Hai scritto: '+text)
	context.reply (context.update.message.from.name)
	
})
*/
bot.launch() 

/*

const { Telegraf } = require('telegraf')

const bot = new Telegraf('5199390277:AAHZQATox8MeF6relM24is5fnP2r4na8E4M')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
/*
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM')).  */