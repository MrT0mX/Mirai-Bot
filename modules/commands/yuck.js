const fs = require("fs");
module.exports.config = {
	name: "yuck",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "yuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yuck")==0 || event.body.indexOf("Yuck")==0 || event.body.indexOf("iw")==0 || event.body.indexOf("Iw")==0 || event.body.indexOf("duhh")==0 || event.body.indexOf("Duhh")==0 || event.body.indexOf("duh")==0 || event.body.indexOf("kaderder")==0 || event.body.indexOf("pwee")==0 || event.body.indexOf("Kaderder")==0 || event.body.indexOf("pwee")==0 || event.body.indexOf("Duh")==0) {
		var msg = {
				body: "wews chossy kapa.🙄",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }