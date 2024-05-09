module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`uy si ${name} ay lumipad
'wag kang sasali kapag mag leleft ka rin gago tanginamo wala ka namang ambag sa ekonomiya tadyakan ko mukha mo. pabitay kita kay heneral luna tanginamo ulol putanginamo tarantado gago tanga bastos walang modo bobo baliw shit siraulo sinto sinto punyeta kulang kulang may sayad stupid pakyu abnormal putaragis hayop demonyo animal aso pusa daga ibon ahas ipis baka tigre buwaya pagong elepante unggoy puta nasau na lahat`, event.threadID)
   } else api.sendMessage(`Active antiout mode, ${name} uto uto has been re-added to the group!`, event.threadID);
  })
 }
}
