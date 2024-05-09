module.exports.config = {

  name: "antinonsense",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "Joshua sy\\ modified by Jonell MAGALLANES",

  description: "When Question Nonsense Question",

  commandCategory: "...",

  cooldowns: 0

};

module.exports.handleEvent = async ({

	event: o,

	api: t,

	Users: n

}) => {

	var {

		threadID: e,

		messageID: a,

		body: b,

		senderID: s,

		reason: d

	} = o;

	

     const i = require("moment-timezone").tz("Asia/Manila").format ("h:mm:ss A");

  const moment = require("moment-timezone");

  const Date = moment.tz("Asia/Manila").format("DD/MM/YYYY");

	if (s == t.getCurrentUserID()) return;

	let c = await n.getNameUser(o.senderID);

	var h = {

		body: `${c}, has Been Detected Nonsense Question using AI Command you are automatically ban from the system\n\nReason: Nonsense Question Using AI\n\nTime\n${Date} ${i}`

	};

    //Add curse words without capital letters

	["You Detected By System For Nonsense Question\n\nYou Banned From System!"].forEach((a => { 

		

        const s = o.senderID;

    let haha = o.body;

	if (haha.includes(`${global.config.PREFIX}ai love moko`) || haha.includes(`${global.config.PREFIX}ai may jowa kana ba`) || haha.includes(`${global.config.PREFIX}ai mahal moba ako`) || haha.includes(`${global.config.PREFIX}ai tao kaba?`) || haha.includes(`${global.config.PREFIX}ai sino bf ko?`) || haha.includes(`${global.config.PREFIX}how to be an ai`) || haha.includes(`${global.config.PREFIX}ai tao kaba`) || haha.includes(`${global.config.PREFIX}ai pogi ako`) || haha.includes(`${global.config.PREFIX}ai paano maging pogi`) || haha.includes(`${global.config.PREFIX}ai taena mo`) || haha.includes(`${global.config.PREFIX}ai sino kaba`) || haha.includes(`${global.config.PREFIX}ai bobo kaba`) || haha.includes(`${global.config.PREFIX}ai may ka chat siya ng iba`) || haha.includes(`${global.config.PREFIX}ai paano mag mahal`) || haha.includes(`${global.config.PREFIX}ai how to fuck`) || haha.includes(`${global.config.prefix}ai geng geng`) ||  haha.includes(`${global.config.PREFIX}ai sino ako?`) || haha.includes(`${global.config.PREFIX}ai where am I right now?`)) {

			modules = "[ BOT BAN ]", console.log(c, modules, a);

			const o = n.getData(s).data || {};

			n.setData(s, {

				data: o			

			}), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {

				reason: o.reason,

				dateAdded: o.dateAdded

			}), t.sendMessage(h, e, (() => {

				const o = global.config.ADMINBOT;

				var n = o;

				for (var n of o) t.sendMessage(`•——[ ANTI NONSENSE ]——•\n❯ Date now : ${Date}\n❯ Time : ${i} (h:m:s) \n❯ Name : ${c}\n❯ Uid : ${s}\n❯ Fb link : https://www.facebook.com/${s}\n————————\nSuccessfully banned to this bot.`, n)

			}))

		} 

	})) 

}, module.exports.run = async ({

	event: o,

	api: t

}) => t.sendMessage("This command is used to detect when Nonsense Question On Ai Command to bot.", o.threadID);
