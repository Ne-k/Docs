const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT, spCID, spCS  } = require('../../config');


const chalk = require('chalk');
module.exports = async bot => {

  const { MessageEmbed } = require('discord.js')
  bot.on('ready', async () => {
      let onlineEmbed = new MessageEmbed()
      .setTitle('Connection Established')
      .setColor('GREEN')
      .setDescription('[NOTICE] Connection established: Connected to Discord...')
      .setTimestamp()
      bot.channels.cache.get('824347880528543775').send(onlineEmbed)
  })
  setInterval(() => {
console.log('Spacer ================================================')
}, 20000)

  console.log(`
    
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██║░░██║
  ░░░██║░░░██║░░██║██║░░██║
  ░░░██║░░░╚█████╔╝██████╔╝
  ░░░╚═╝░░░░╚════╝░╚═════╝░
Signed into ${bot.user.tag}
===============================================
`)

  //==========================================================

    
    

  //====================================================================
  const nekoclient = require('nekos.life');

    setInterval(() => {
      var rnd = Math.floor(Math.random() * 2);
      switch (rnd) {
        case 1:
          {
            bot.user.setActivity(`t;help |  ${bot.options.shardCount}/${bot.options.shardCount} shards`, {
              type: 'WATCHING'
            });
          }
          break
          default:
            {
              bot.user.setActivity(`t;help | Truth Or Dare`, {
                type: 'PLAYING'
              });
            }
           
            break
      }
    }, 6500)
  
  //=================================== GUILD ADD/REMOVE =============================================


const Discord = require('discord.js')
  bot.on("guildCreate", guild => {
    let Join = new Discord.MessageEmbed()
  .setTitle('<:0_online:824333430367059969> NEW JOIN <:0_online:824333430367059969>')
  .setColor('GREEN')
  .addField(`\n‿︵‿︵‿︵‿︵‿︵‿︵\n\n${guild.name}`, `Guild ID:\n\`${guild.id}\`\nMember Count:\n\`${guild.memberCount.toLocaleString()}\`\nCreated at:\n\`${guild.createdAt}\``)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
  
  
    bot.channels.cache.get('824333133477314570').send(Join)
    //Your other stuff like adding to guildArray
  })
  
  //removed from a server
  bot.on("guildDelete", guild => {
  // again, replace the url in the open method with yours
    let LeaveEmbed = new Discord.MessageEmbed()
  .setTitle('<:0_dnd:824333439028297758> BOT LEAVE <:0_dnd:824333439028297758>')
  .setColor('RED')
  .addField(guild.name, `\`${guild.id}\`\nMember Count:\n\`${guild.memberCount.toLocaleString()}\``)
  .setThumbnail(guild.iconURL())
  .setTimestamp()
    bot.channels.cache.get('824333133477314570').send(LeaveEmbed)
    //remove from guildArray
  })

  
 

 

  //============================= Autoposting shit ===========================================
  
//====================================DISCORD.BOATS===========================================================================================================================
const promises = [
  bot.shard.fetchClientValues('guilds.cache.size'),
  bot.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)')
];

return Promise.all(promises)
  .then(results => {
      const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
      const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

      const fetch = require('node-fetch')
const BOATS = require('boats.js');
   const Boats = new BOATS('2NFEeaWliuz7JFTjl1nELbQWxoDMgO3FbuJtcAiPFwYZEUmziciJY9ycj1Uek1x8DVA2ZaDyTamQzzMwKCpvfAkkSGIcNtjJ9BNqmSkjBPF5im07gzCd4jak4zCepd7umcKp1FWjU6pemcfbBmMcok0Nspx');
   Boats.postStats(totalGuilds, '752306970467237970').then(() => {
          console.log('[ DBOATS ] Successfully updated server count.')
   }).catch((err) => {
    console.log(chalk.redBright(`[ BOATS ERROR ] `) + `${err}`)
   });
   
   
   Boats.getBot('752306970467237970').then(bot => {
   }).catch((err) => {
    console.log(chalk.redBright(`[ DBOATS ERROR ] `) + `${err}`)
    console.log(chalk.green(`[ DBOATS ] `) + `${bot}`)
   });
//===============================================================================================================================================================
//=============================TOP.GG==================================================================================================================================


const Topgg = require('@top-gg/sdk')

const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MjMwNjk3MDQ2NzIzNzk3MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1MDY2NzUzfQ.TpGhII-9wHjglilYMega0jtcfzRUIBS9SloKEfJ5-sA')

setInterval(() => {
  console.log(chalk.greenBright('[ TOP.GG ]') + ` Top.gg stats have been posted.`)
api.postStats({
  serverCount: totalGuilds,
  shardcount: bot.options.shardCount

})

}, 1800000) // post every 30 minutes
//===============================================================================================================================================================



//===============================VOID BOT LIST================================================================================================================================

fetch(`https://api.voidbots.net/bot/stats/${bot.user.id}`, {
  method: "POST",
  headers: { 
    Authorization: "VOID_fUEzIf7lDejSyjO4cuadDANdhis8Yi6r8sDMk69eC0JgoPiy",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({"server_count": totalGuilds, "shard_count": bot.options.shardCount })
}).then(response => response.text())
.then(console.log).catch(console.error);
//===============================================================================================================================================================


  })
  .catch(console.error);



};