const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANTAGONISTE~MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dJZnBBcndOc01kSTAyZFpsNkQ4WVMxSjc3VzU5b0V1MHo1RzdDeDBXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2pyM004bzhVa0RUZ3ExdWsyaWFWTlVSKzR1eFJpUXFKaVRTQ0JiR1pRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTDBHR0crU3A3MmI0RFlQcStYZVhGYWJLNE1ML01iWXJLNGEwWVhiS0drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cEhBeFZFM3ZscGk5dXV1MWV1MEl1V0JaMk9meXZYcENGWG1HNnpraGxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQbGNyNFBMbHVvTlVDK2VHMzlMTFZpM2ZXOFpTcS9SaWYxSDRvR0xlRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBRNGFlVXN5TnQybWo5bjIwMENCSER4d3Q5TmgwMHZWWVNaZE5oYzU5elk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0R2aHBUQ3RoR0dyUmdMSG9PaTZRZGZ4QjR3RGFxd052dkxWelJ4Q0hIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFE4anExZzd6SVA1OS95NXFMSGxWcEQvc0lrSWpaV2l5Tk5zNDlSd09qbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0zcU0ydWFHb2U2R01sRGxzU3NQR0FFeTZ5UGMwY05DUnVVa2RtZjdEYkNZUUg4bTBVOXoraTc4TTR1cTRHK3FjNVhPd2ZkOTM1aXNmdmVpVklKb2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IklFc25MK2lBVnYzN05JYjF2eXVYcFNBdjZ2NWZENnkwTmQzdzZSZlhyK0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTgyOTYzNDMzMzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EzNDU3QkM1MEYzMkI3REQ0RjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODMxOTA5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTgyOTYzNDMzMzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E1OTc4OUYwMTQ5Mjk2QjA2OUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODMxOTA5Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUERHRDJOQlIiLCJtZSI6eyJpZCI6IjE4Mjk2MzQzMzM1OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjE1NTE2MzgxMjY3ODQ6NkBsaWQiLCJuYW1lIjoi8J2QgPCdkI3wnZCT8J2QgPCdkIbwnZCO8J2QjfCdkIjwnZCS8J2Qk/CdkIQg8JOKiPCdkJLwnZCK4pO78JOKiSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFhranprUTdLTzN4Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMDdHS1RkSjBxaTIrMFZrYjFDNzRkRU9IbkVwbTRpejRna0dZWXEranFtbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS3dxRXZUUCtuaWl1S2VYWGowYVhRNjZNOG5Fc3l6dWM5R2N1THYwVjlWbWYrVUFnMTFua0t5bkplS1VMQTJQUUdTQTBTQzQxdjFsTVl5Q1YrS2Vuanc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdFMVlNbWtnSDcxcjJGZGRiQ0J5dlROQ2V5b2xpWFBzNWgzL2tVNzFVcEpVZFhFRWFxL3FUNVRyYktKU251TlZuRnlUSCtDK1ozQU5MSGhFWHVNWGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTYzNDMzMzU6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkT3hpazNTZEtvdHZ0RlpHOVF1K0hSRGg1eEtadUlzK0lKQm1HS3ZvNnBxIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODMxOTA4NywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNQVkifQ==",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANTAGONISTE-MD*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/uj69m9.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANTAGONISTE-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANTAGONISTE-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "18296343335",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝘈𝘕𝘛𝘈𝘎𝘖𝘕𝘐𝘚𝘛𝘌 𝘵𝘦𝘤𝘩",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by 𝘈𝘕𝘛𝘈𝘎𝘖𝘕𝘐𝘚𝘛𝘌 𝘵𝘦𝘤𝘩*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/uj69m9.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *ANTAGONISTE-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "13058962443",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
};
