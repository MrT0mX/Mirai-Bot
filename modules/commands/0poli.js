module.exports.config = {
  name: "poli",
  version: "1.0.",
  hasPermssion: 0,
  credits: "jameslim",
  description: "generate image from polination",
  commandCategory: "image",
  usages: "query",
  cooldowns: 2,
};
module.exports.handleEvent = async function ({ api, event }) {
if (!(event.body.indexOf("poli") === 0 || event.body.indexOf("Poli") === 0)) return;
     const args = event.body.split(/\s+/);;
    args.shift();

const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("put text/query", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "Image will be deleted after 1 hour!",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};

module.exports.run = async function({api, event}) {}