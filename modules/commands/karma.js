const axios = require('axios');

module.exports.config = {
  name: 'Karma',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'August Quinn',
  description: 'Get a karma quote.',
  commandCategory: 'Fun',
  usages: '/Karma',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  try {
    const response = await axios.get('https://karmaquotes.august-api.repl.co/quotes');
    const karmaQuotes = response.data;

    if (karmaQuotes.length === 0) {
      return api.sendMessage('No karma quotes available, please try again later.', event.threadID, event.messageID);
    }

    const randomIndex = Math.floor(Math.random() * karmaQuotes.length);
    const randomKarmaQuote = karmaQuotes[randomIndex];

    const message = `💬 𝗞𝗔𝗥𝗠𝗔 𝗤𝗨𝗢𝗧𝗘:\n\n ➩ ${randomKarmaQuote.quote}`;

    api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage('An error occurred while fetching karma quotes. Please try again later.', event.threadID, event.messageID);
  }
};
      