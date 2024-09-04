const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347057412119";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_22_09_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUSGdwT3MvM1AyVzJQNlREM0U1WTMzUGdhMERHL1BpV3VIRGkzTXFBT0dJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5WnlxZUhjMFRSLTFjNmxQdS1GNEdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2OWE5MWNjLTNhZmMtNGI5OC1iNjIwLTQwYjMzOTUxMjhiZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDExOCxcbiAgICAgIDE1NSxcbiAgICAgIDIzNCxcbiAgICAgIDg3LFxuICAgICAgMjA5LFxuICAgICAgNTgsXG4gICAgICAxMjEsXG4gICAgICAxMTIsXG4gICAgICAxNCxcbiAgICAgIDQ2LFxuICAgICAgMTAyLFxuICAgICAgNjMsXG4gICAgICAyMjgsXG4gICAgICAxNzMsXG4gICAgICAxMjAsXG4gICAgICAxMjMsXG4gICAgICA5MCxcbiAgICAgIDI4LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAyNDUsXG4gICAgICAyLFxuICAgICAgOTIsXG4gICAgICA0NixcbiAgICAgIDI1LFxuICAgICAgODQsXG4gICAgICA1MCxcbiAgICAgIDIwMixcbiAgICAgIDE4OCxcbiAgICAgIDIsXG4gICAgICA2MSxcbiAgICAgIDkyLFxuICAgICAgMTU1LFxuICAgICAgMjM0LFxuICAgICAgMjcsXG4gICAgICAyNTIsXG4gICAgICAxOSxcbiAgICAgIDI3LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FzbU9nQ0VLdVM0cllHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFaFltQzdhWk9JRERqRUNwa0t6QUJtSXljMy96UlRYYkQzTXhHMGlmb0JZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFQd0pzbStUUkZRNUYrQ09Gd2FWd25Dekx1SnB0amRjSjJyTFNGenVvUGhUMnBKQWx2VFVWT2hYdFNiUWlmRVM4SEh4NXd0OGZFaXlxSFdmZ1BaQkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNuMktQd1RoMHE1OWVxYzJid1dCN1g1UWJUUVN5MWoxOE56VWZ0RkYvK0hhcWE4Q1hUaW9CbVZwRW92a2IzMTBNS2VkcXVLbER3R1RZRmYzZEZwaWp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NzQxMjExOToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2OTEwODA5NzI3MTEzOjE5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NzQxMjExOToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU0NjY5MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJFQUFFMjJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdjUS5qc29uIjogIntcImtleURhdGFcIjpcIjhTT2FWdkQ1OG94VHg2V1pycmUxMUhsU2RBNkovdENPOHZJdU9IL3Vzamc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzU1MzczNjA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQ3ODQ5MzUzNjFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHY1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUdDRqTnNrWURJRXJIaDB2Wm84c2syWk9WbHhLWUhabFdXUndNa1VNNWUwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1NTM3MzYwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0ODQxOTk0NDIxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2NULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEJQK3I2dVdkZXdhTlQ5QUMveHNRdGxJUmovYXpSUUo3OVN5dFRtOFd4az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTUzNzM2MDYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTQ2Njg3MTEzMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQkVBQUUyMi5qc29uIjogIntcImtleURhdGFcIjpcImlOSEJwRG14NFRpS2xPeUhsS0hHM3hSZDdmZ3BubmJ3OTgzYmxtR3RkMm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzU1MzczNjA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI0Nzg0OTI5NjU0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCRUFBR2NSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUY3emdRUGo2U3JEOTRsckFodlpVWTJ5K2U3OUcwbkt5bWh4ZktCQU13QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTUzNzM2MDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQ3ODQ5NjQ0MTZcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
