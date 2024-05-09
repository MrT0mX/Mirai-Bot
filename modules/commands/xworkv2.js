module.exports.config = {
    name: "work2",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Hung", 
    description: "Work to earn money, work to earn money",
    commandCategory: "Coins",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 600000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "🐳Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinscn = Math.floor(Math.random() * 401) + 200; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 801) + 200; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 401) + 200; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 601) + 200; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 201) + 200; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 801) + 200; //random coins khi đào đá
var coinsex1 = Math.floor(Math.random() * 1500) + 500;
//random công việc cần làm
var rdcn = ['staff recruitment', 'hotel administrator', 'at the power plant', 'restaurant chef', 'worker']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['plumber', 'neighbors air conditioner repair', 'multi-level sale', 'flyer distribution', 'shipper', 'computer repair', 'tour guide', 'breastfeeding']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['earn 13 barrels of oil', 'earn 8 barrels of oil', 'earn 9 barrels of oil', 'earn 8 barrels of oil', 'steal the oil', 'take water and pour it into oil and sell it']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['iron ore', 'gold ore', 'coal ore', 'lead ore', 'copper ore', 'oil ore']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['diamond', 'gold', 'coal', 'emerald', 'iron', 'ordinary stone', 'lazy', 'bluestone']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['vip guest', 'patent', 'stranger', '23-year-old fool', 'stranger', 'patron', '92-year-old tycoon', '12-year-old kid']; //random công việc khi đào đá
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];

  var rdex1 = ['lick admin' ass, 'do dog', 'masturbation', 'make cave', 'drink cat urine', 'eat shit instead of rice']; //random công việc khi thử thách 
var work7 = rdex1[Math.floor(Math.random() * rdex1.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `You are working ${work1} in the industrial zone and earn ${coinscn}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); break;             
                case "2": msg = `You are working ${work2} in the service area and earn ${coinsdv}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdv)); break;
                case "3": msg = `You ${work3} at the oil opening and sold ${coinsmd}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "4": msg = `You are mining ${work4} and earn ${coinsq}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsq)); break;
                case "5": msg = `You can dig ${work5} and earn ${coinsdd}$` ; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd)); break;
                case "6": msg = `You are ${work6} cho ${coinsdd1}$ if xxx 1 night, then you agree right away :)))`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd1)); break;
                case "7": msg = `You got the 24h challenge ${work7} and you got it ${coinsex1}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coinsex1)); break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("Please enter 1 number", event.threadID, event.messageID);
            if (choose > 8 || choose < 1) return api.sendMessage("Option not on the list.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️Not updated yet...") {
                msg = "⚡️Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 40000),
            seconds = ((time % 1000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("=== EARN EVERY DAY ===" +
                "\n\n1.🏬 Industrial park." +
                 "\n2.🏢 Service area." +
                 "\n3.🕳️ Oil field." +
                 "\n4.⛏️ Mining ore." +
                 "\n5.⛏️⛰️ Digging stones" +
                 "\n6.🕺💃 Stand in the way :)))" +
                 "\n7.😂Challenge🤦" +
                 "\n\nPlease reply to the message and choose by number" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}
