module.exports.config = {
    name: "adping",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "Deku",
    description: "Pinger",
    usages: "[url (ex: https://example.repl.co/)]",
    commandCategory: "...",
    cooldowns: 2,
};
module.exports.run = async function ({ api, event, args }) {
  const a = require("axios")
let url = args[0]
function r(msg){
  api.sendMessage(msg, event.threadID, event.messageID)
}
if (!url) return r("Missing URL\nUse: "+this.config.name+" "+this.config.usages);
if (!url.startsWith("https://")) return r("URL is required to start with https://")
const rrr = await a.get("https://ping.ainz-sama101.repl.co/ping?url="+url);
var re = rrr.data.message;
r(re)
                   }