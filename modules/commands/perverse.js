const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'PerverseFam',
  version: '1.1.0',
  hasPermission: 0,
  credits: 'August Quinn',
  description: 'Get a random video from Perverse Family.',
  commandCategory: 'NSFW',
  usages: '/PerverseFam',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  try {
    const processingMessage = await api.sendMessage(
      {
        body: 'I am currently processing the video to send. Please be patient...',
      },
      event.threadID
    );

    const response = await axios.get('https://perversefamily.august-api.repl.co/random-video');
    const { title, url } = response.data;

    const mp4Url = url.replace(/\.([a-z0-9]+)(?:[\?#]|$)/i, '.mp4$1');
    const videoResponse = await axios.get(mp4Url, { responseType: 'arraybuffer' });

    const videoPath = path.join(__dirname, 'cache', 'video.mp4');
    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const videoMessage = await api.sendMessage(
      {
        attachment: fs.createReadStream(videoPath),
        body: `💬 Perverse Family - ${title}\n\nNOTE: This video will be unsent in 15 minutes for safety purposes.`,
      },
      event.threadID
    );

    fs.unlink(videoPath, (err) => {
      if (err) return console.log(err);
      console.log(`Clear File Successfully for Perverse Family video: ${videoPath}`);
    });

    setTimeout(() => {
      api.unsendMessage(videoMessage.messageID);
    }, 15 * 60 * 1000);
  } catch (error) {
    console.error('Error processing Perverse Family command:', error);
    api.sendMessage(
      'An error occurred while processing the Perverse Family command.',
      event.threadID
    );
  }
};
