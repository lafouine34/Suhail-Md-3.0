const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22893635053";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_15_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi95KzNNL2dIQlE2UFdJd3ZaY1VVN25ySVNpTkVqVXBtSGh3dWNWKy9VMEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk8tWlNmUXphVHYtdU9fREZncTIwbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWU2ZjEzYzEtYTAyNi00OGFkLWE3YmMtMWQ0NDYzM2IzZWI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE5MyxcbiAgICAgIDE3NCxcbiAgICAgIDI0NixcbiAgICAgIDk1LFxuICAgICAgOTAsXG4gICAgICA3OSxcbiAgICAgIDIwNCxcbiAgICAgIDE1NCxcbiAgICAgIDIwNixcbiAgICAgIDM1LFxuICAgICAgNjAsXG4gICAgICAzOCxcbiAgICAgIDQ2LFxuICAgICAgMTI3LFxuICAgICAgMjUsXG4gICAgICA5OSxcbiAgICAgIDIzOCxcbiAgICAgIDE0NyxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMzEsXG4gICAgICA2MCxcbiAgICAgIDEyMyxcbiAgICAgIDE3NixcbiAgICAgIDE3MyxcbiAgICAgIDIxNSxcbiAgICAgIDIyNCxcbiAgICAgIDE3OSxcbiAgICAgIDcwLFxuICAgICAgMjEwLFxuICAgICAgMjAxLFxuICAgICAgNTQsXG4gICAgICAxNTIsXG4gICAgICAxNzYsXG4gICAgICAzNyxcbiAgICAgIDEzLFxuICAgICAgNTMsXG4gICAgICAxMzUsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUs3RkZDUjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODkzNjM1MDUzOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Ly68J2Qo/CdkLHwnZCt8J2Qnl/wnZCm8J2QnuC8u1wiLFxuICAgIFwibGlkXCI6IFwiMTM2Mzc0MTg3NTIwMDE5Ojg4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pEdnpZSUhFTyt1c01BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEhTY2EzYys2d0JQSEg1R1gxYVdFM0ROd1VCeGZ5NFVkL3BndXpvQTlBcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXSnE1SEFSRkU0THJlV3JlNGxCRVd3TmNTTGU4OG1OUXpJTktoTWM1c1VmK0NtdGhVNDlOMUxBaXpnR2FQSmhVVXRmOGJrUWNUaTFVRFVKNjJhQUdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSK1hEYTM3ZVJySyt2N1FzaUVnbnVncnF6TFNIZFR6MzBJN2tVeU1CYWZoaDZOU3poVmd5VVkvdWVhekpTRXp2QmZEeEl6b3BWS2dEMnVWMGFsbXloZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjg5MzYzNTA1Mzo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTYyMjg5OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "༺𝐣𝐱𝐭𝐞_𝐦𝐞༻",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
