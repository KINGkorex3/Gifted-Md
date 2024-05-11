//GIFTED-MD//
//BASED ON ASTA-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "2349132681483";
global.owner = process.env.OWNER_NUMBER || "2349132681483";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUI4QU0zTno3STBMeHVabi9tNEV3anZGNWtxazZZTzVObHpKcFJQU3pIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWtFK2FlMm1iNFlIdU11QW5WK1FFeTVndGZGU2l1elRHZGs4aHFpWHZCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RUZIM2lZcklCeGJHTVpTV1FiaDVyOWgwVEtiR0kzUGt5a1FjRG91Vm5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEcTZLVENybnBHaHFpNnU4QXJBS2EybWoxSUxuSEV5cnRtSmphbDgzdnowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldFdDRwTW9PV21kTk9CMDluRGVyV3RUaCtyTnozRXV1Zkwvc1VWQ1EwSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkzZzVPNU1aQXJrMGUwaXJKQktyc3lmS1NLeGNxK0Jva1NJb2hWUnJUVHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RLSnhZb0tmL3RsMk1yVkJndzdzb2Z0VzMvbFNCc2pWbmp0dmx2UG9HQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2RQSlF6T0RoWXBjY1A3NnY2b2dBa3BDUitWOXo4d0VWejJVSmNnMFBYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1MGk3WGFEYTRlYTVrdnNjaWd6S09zNHFMc0ZIRXZFdVRYeGdYZ0Z1UEd5aVQ5akRZQnA4dGdIVnZOdTZNSXE4SVloRWVOdnBFaERieE96UURnNWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJWNm9VQ1pJU0RydUhnKzY3N0dGTDBRalFnWENUMGlCUnFyZHRXUGJ3K2FjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHUzRvZDVPRlRkQ1ZkUDFLcjNJclR3IiwicGhvbmVJZCI6Ijk2MDMyMzg5LWZlNjgtNDE5MS04ZDc2LTcyNWNhNTYyYmZlMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUWh3bkoxME5Tem9GbEM1eDczVFRlMzZHL2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWJpUUx2YVhzOE9SdFVVOEhJWjRzZy96dzBNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkyNDVQUk1XIiwibWUiOnsiaWQiOiIyMzQ5MTMyNjgxNDgzOjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfhoPwn4W38J+FtCDwn4W68J+FuPCfhb3wn4W2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZno0NGtCRUxmcC83RUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzUEtZNFpLOC9hWE1SRSswWDBIMVV4U1BpZEt0b3pxZld3SEp5TjlGZkdVPSIsImFjY291bnRTaWduYXR1cmUiOiJESjZuamh5K0NMS3lUTGFEVVd2SHIrcUx1QXNncXQyUjlHdVFSQkpCQ2dYT0dZYlJ3WDM3cC81a2F6ci9SY250aDdoaEkxaFk5Qlg0NXh0Y0lKWnRCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUFpY09iSTJKMTIxcnBVaWZyT0JTK2ozSGdMZ3M4OU10QzErSmZhNDBKWEt0dE90VElkOVJYWkhZdzBJZG93aXB5aXNLR0tacXBsQ0g5S0d3RCsyaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMyNjgxNDgzOjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR6eW1PR1N2UDJsekVSUHRGOUI5Vk1VajRuU3JhTTZuMXNCeWNqZlJYeGwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTU0Njc0NjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGYxIn0="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",
  author: process.env.PACK_AUTHER || "Gifted Tech",
  packname: process.env.PACK_NAME || "Gifted-Md♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
