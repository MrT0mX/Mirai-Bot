module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Notify About Members Removed Or That Have Left The Group.",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "uy may lumipad 'wag kang sasali kapag mag leleft ka rin gago tanginamo wala ka namang ambag sa ekonomiya tadyakan ko mukha mo. pabitay kita kay heneral luna tanginamo ulol putanginamo tarantado gago tanga bastos walang modo bobo baliw shit siraulo sinto sinto punyeta kulang kulang may sayad stupid pakyu abnormal putaragis hayop demonyo animal aso pusa daga ibon ahas ipis baka tigre buwaya pagong elepante unggoy puta nasau na lahat" ;
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `bye.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "{name} Has Departed From The Group\nReason: {type}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
  }
