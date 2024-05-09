module.exports.config = {
	name: "brainly",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Kopiko",
	description: "Brainly",
  usages: "[text | en/tl/ko/ru/etc....]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
let text = args.join(" ")
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
const res = await axios.get(`https://api.xteam.xyz/brainly?soal=${text1}&APIKEY=bb87827d6c4b905e`);
var answer = res.data.jawaban;
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${text2}&dt=t&q=${answer}`), (err, response, body) => {
		if (err) return api.sendMessage("Error", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
}
