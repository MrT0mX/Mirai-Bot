const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "ai",
  version: "1",
  hasPermssion: 0,
  credits: "Grey, Daniel",
  description: "Ask",
  commandCategory: "ai",
  usages: "bard <ask>",
  cooldowns: 5, 
};

module.exports.run = async function({ api, event }) {
  let { threadID, messageID } = event;
  const cookies = "agi869PPkNNkXyulYyp1jWlbkEIe93iqL8CoKQbvIQLhre85Rp5kwP2ReIQMtUUpNvJQgg."; // place your cookie here
  const response = event.body.slice(5).trim();

  if (!response) {
    api.sendMessage("Please provide a question or query", threadID, messageID);
    return;
  }

  api.sendMessage("Searching for an answer, please wait...", threadID, messageID);

  try {
    const res = await axios.get(`https://gptgotest.lazygreyzz.repl.co/ask?cookies=${cookies}&question=${response}`);
    const responseData = JSON.parse(res.data.response);
    const message = responseData.response;
    const imageUrls = responseData.image;

    if (message && message.length > 0) {
      const photoUrls = imageUrls.map(url => url.replace(/\\(.)/mg, "$1")); 

      const photoAttachments = [];

      if (!fs.existsSync("cache")) {
        fs.mkdirSync("cache");
      }

      for (let i = 0; i < photoUrls.length; i++) {
        const url = photoUrls[i];
        const photoPath = `cache/photo_${i + 1}.png`;

        try {
          const imageResponse = await axios.get(url, { responseType: "arraybuffer" });
          fs.writeFileSync(photoPath, imageResponse.data);

          photoAttachments.push(fs.createReadStream(photoPath));
        } catch (error) {
          console.error("Error occurred while downloading and saving the photo:", error);
        }
      }

      api.sendMessage(
        {
          attachment: photoAttachments,
          body: message,
        },
        threadID,
        messageID
      );
    } else {
      api.sendMessage(message, threadID, messageID);
    }
  } catch (error) {
    console.error("Error occurred while fetching data from the AI API:", error);
    api.sendMessage("An error occurred while processing your request.", threadID, messageID);
  }
};