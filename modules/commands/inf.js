module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/e3YvQWP.jpg", "https://i.imgur.com/DUzjIyR.png", "https://i.imgur.com/pGvIWVw.jpg", "https://i.imgur.com/2jWvSxp.jpg", "https://i.imgur.com/zoE3b9T.jpg", "https://i.imgur.com/4JVNsbo.jpg", "https://i.imgur.com/YUNG8K0.jpg", "https://i.imgur.com/RrAMgWe.jpg"];
var callback = () => api.sendMessage({body:`➢Admin and Bot information

⁂Bot Name: ${global.config.BOTNAME}

✡Bot Prefix: ${global.config.PREFIX}

✫Bot Owner: pahina

fblink : N/A

➟UPTIME

✬Today is: ${juswa} 

➳Bot is running ${hours}:${minutes}:${seconds}.

✫Thanks for using ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };