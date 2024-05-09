const axios = require('axios');

module.exports.config = {
  name: 'Aug',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'August Quinn',
  description: '...',
  commandCategory: '...',
  usages: '...',
  cooldowns: 5,
};

module.exports.run = async function ({ api, args, event }) {
  try {
    const text = args.join(' ');

    if (!text) {
      api.sendMessage('Please provide some text for testing.', event.threadID, event.messageID);
      return;
    }

    const apiUrl = 'https://chatgpt.august-api.repl.co/response';
    const response = await axios.post(apiUrl, { prompt: text });

    if (response.data && response.data.answer) {
      const answer = response.data.answer.trim();
      api.sendMessage(`${answer}`, event.threadID, event.messageID);
    } else {
      api.sendMessage('An error occurred while testing. Please try again later.', event.threadID, event.messageID);
    }
  } catch (error) {
    console.error('Error in Aug command:', error);
    api.sendMessage('An error occurred while testing. Please try again later.', event.threadID, event.messageID);
  }
};
