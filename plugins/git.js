const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/5b1a13030d82fce99f12f.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `RDX Bot Created By Abhiram Sachu
Creator number 👉: wa.me/916238560742

Githublink (Setup)  👇:    https://github.com/ANUSER1/COSMIC

DEPLOYE  👇:  https://heroku.com/deploy?template=https://github.com/ANUSER1/COSMIC.git

PUBLIC BOT GROUP 👇: https://chat.whatsapp.com/KeEMhqBW644IN46PYsGDWf


`}) 

}));
