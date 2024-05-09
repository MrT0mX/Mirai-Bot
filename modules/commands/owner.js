module.exports.config = {
	name: "owner",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "john arida",
	description: "Owner",
	commandCategory: "Others",
	cooldowns: 5
}

module.exports.run =  ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var callback = () => api.sendMessage(
  {body:`
 >🥵<[ Owner of ${global.config.BOTNAME} ]>🥵<                            \n👻 > [ ${global.config.OWNER} ]
\n👻 > 《AGE》: ${global.config.AGE} \n👻 > 《GENDER》: ${global.config.GENDER} 
\n👻 >《STATUS》: ${global.config.STATUS} \n👻 >《ADMIN》《UID》: ${global.config.UID} \n👻 >《ADMINLINK》:\n${global.config.FACEBOOK}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/${global.config.UID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };