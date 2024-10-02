const { Telegraf, Markup } = require("telegraf")
const bot = new Telegraf('7749082725:AAHiptl2m4zbYNPaqvLviLdZI6KmKttu41U');

const miniAppUrl = 'https://cryptictap.vercel.app'

bot.start((ctx) => {
    ctx.reply("Welcome! Click the button below to open the mini app",
    Markup.inlineKeyboard([
        Markup.button.webApp('Launch Demo', miniAppUrl)
    ])
    );
})

bot.launch({
    webhook: {
      domain: 'https://crypticbot.onrender.com',
      port: process.env.PORT || 3000,
    },
  }).then(() => {
    console.log("Bot is running");
  }).catch(err => {
    console.error("Failed to launch the bot:", err);
  });