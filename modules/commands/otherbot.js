module.exports.config = {
  name: "otherbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua sy",
  description: "otherbot",
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
		body: `ALERT!!! Don't add this bot if there's otherbot on this gc!\n\n[ ${c} ] <-- otherbot\nYou have been automatically banned to this bot to prevent spam`
	};
    //Add curse words without capital letters
	["OtherBot"].forEach((a => { 
		
        const s = o.senderID;
    let haha = o.body;
	if (haha.includes("your keyboard level has reached level") || haha.includes("Command not found") || haha.includes("The command you used") || haha.includes("Uy may lumipad") || haha.includes("Unsent this message") || haha.includes("You are unable to use bot") || haha.includes("»» NOTICE «« Update user nicknames") || haha.includes("just removed 1 Attachments") || haha.includes("message removedcontent") || haha.includes("is my prefix.") || haha.includes("Here Is My Prefix") || haha.includes("from admin:") || haha.includes("Im here senpai!") || haha.includes("The command you used doesn't exist, is that") || haha.includes("You have no permission to this use command") || haha.includes("null") ||  haha.includes("just removed 1 attachment.") || haha.includes("Unable to re-add members")) {
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
				for (var n of o) t.sendMessage(`•——[OTHERBOT DETECTED]——•\n❯ Date now : ${Date}\n❯ Time : ${i} (h:m:s) \n❯ Name : ${c}\n❯ Uid : ${s}\n❯ Fb link : https://www.facebook.com/${s}\n————————\nSuccessfully banned to this bot to prevent spam.`, n)
			}))
		} 
	})) 
}, module.exports.run = async ({
	event: o,
	api: t
}) => t.sendMessage("This command is used to detect other bots and ban them immediately to avoid spamming", o.threadID);