const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`HythoBot`,"http://twitch.tv/Death Shop")
});

var prefix = "-"
client.on('message', message => {
  if (message.author.xErenaa) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let bErenaalog = client.channels.find("name", "Erenaa-log");
 
  if(!bErenaalog) return message.reply("I've detected that this server doesn't have a Erenaa-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "email") {
function randomem() {
let email = '';
const ReBeL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._"\'';
for (let i = 0; i < 5; i++) email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
return email;
}
function randompass() {
let pass = '';
const CoDeS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&()-_"\'';
for (let i = 0; i < 8; i++) pass += CoDeS.charAt(Math.floor(Math.random() * CoDeS.length));
return pass;
}
const random1 = randomem();
const random2 = randompass();
message.author.send(`------------------------
email : **${random1}@gmail.com**
password : **${random2}**
------------------------`).catch(err => {
   if(err == "DiscordAPIError: Cannot send messages to this user") {
      return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");
}
});

message.channel.send("**تم الارسال الحساب في الخاص | ☑ **")
}});

client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("Usage: !bc [message]");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' Server', ${message.guild.name}, true)
          .addField(' Sender ', ${message.author.username}!${message.author.discriminator}, true)
          .addField(' Message ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(${m},{embed: bc});
      });
      const unknown = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(':white_check_mark:| the messege is loading ')
      .addBlankField(true)
      .addField(':hotsprings:| i got sended to  ', message.guild.memberCount , true)
      .addField(':pencil:| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
                        
-server『معلومات عن السيرفر』
-email للحصول علي اميل وهمي 
-unmute لفك الميوت من شخص
-mute لاعطاء ميوت لشخص
-ban لاعطاء حظر لشخص
-gstart لتبدا القيفاوي
-bc『 ارسال رساله جمعايه في الخاص 』
-cl『 قفل الشات 』
-op『فتح الشات 』
-clear 『 لمسح الشات 』
**The Bot By @Hytḧ҉̶͞o|HaY̷͟͠tͪͮ̍hom̋̃̾_YT#6747  and @**Zinx I Friendly**
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  
    
    `);
  }
});

client.on('message', message => {
    if(message.content === '-invite'){
        message.channel.send('```https://discordapp.com/oauth2/authorize?client_id=530340243694419970&permissions=268435488&scope=bot```')
    }
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('**اهلين منور**');
  }
});

client.on('message', message => {
   if(message.channel.type === "dm") return;
     if(message.content.startsWith ("-زواج")) {
     if(!message.channel.guild) return message.reply(' This command only for servers ')
     var proposed = message.mentions.members.first()
 
     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
      if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
             message.channel.send(`**${proposed}
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 10 ثانية
اكتبي موافقه او لا**`)
 
const filter = m => m.content.startsWith("موافقه");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))
 
  const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
  message.channel.send(`**${message.author} تم رفض عرضك**`);
})
 
 
 
 
 }
});

client.on("message", message => {
                                    var prefix = "-";
                                 if (message.content === "-help") {
                                     message.channel.send('');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**ٍHythobot Games Commands**__
                                      
                                      **『-لعبة الزواج __|__ زواج 』
                                      『 -لعبة صراحة __|__ صراحة 』
									  『 -rps __|__ لعبة حجر ورقة مقص 』
									  『 -لعبة اسئلة فورت نايت __|__ فورت نايت 』
									  『-لعبة لو خيروك __|__ لو خيروك 』**
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   });

const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "-"
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("HythoBot")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });
	   
	   client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'فلسطين') {      
    msg.react(":flag_ps: ")
    msg.channel.send(":flag_ps: ")
  }
});
 
 
client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});
 
client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});

client.on("message", function(message) {
      var prefix = "-"
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

const pubg = [
     'Fortnite | ما هو اقوي سلاح برائيك ؟',
     'Fortnite | ما هي افضل منطقة تنزل بها برايك ؟',
     'Fortnite | كم عدد فوزاتك ؟',
     'Fortnite | كم هو عدد اكثر قتلات لك ؟ ',
     'Fortnite | كم عدد اصدقائك ؟ ',
     'Fortnite | كم عدد سكناتك ؟ ',
     'Fortnite | من هو افضل لاعب اجنبي حسب رايك ؟ ',
     'Fortnite | من هو افضل لاعب عربي حسب رايك ؟ ',
     'Fortnite | ما هو افضل طور حسب رايك ؟ ',
     'Fortnite | هل انت محترف ام نوب ؟ ',
     'Fortnite | ما هما افضل سلاحين مع بعض حسب رايك ؟ ',
 
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('-فورت نايت')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله فورت نايت")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/497081825492074496/500662255004942346/images.jpg")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});

const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("لو خيروك-")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on('message', msg => {
  if (msg.content === '-hsupport') {
    msg.author.send(`https://discord.gg/6x8aNmE`)
 }
});

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **تم قفل الشات*');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
 
              }).then(() => {
                  message.reply("**تم قفل الشات :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**تم فتح الشات**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
 
              }).then(() => {
                  message.reply("**تم فتح الشات :white_check_mark:**")
              });
    }
       
});

client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x00a300,
        description: ":white_check_mark: | Delete " + args[1] + " Message!",
        footer: {
          text: "HythoBot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = '-' // البريفكس
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) { // الامر
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', message => {
const myID = "421034759003832330";
  if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bca')){
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('السيرفر:', message.guild.name)
.addField('المرسل:', message.author.username)
.addField('الرسالة:', args)
m.send({ embed: bc })
})
}
});

var prefix = "-";
 
client.on('message', function(msg) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };
 
  if(msg.content.startsWith ('-server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**__ Server Name | اسم السيرفر__**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__ OwnerShip | الاونر الاساسي__**',`**${msg.guild.owner}**`,true)
    .addField('**__ Server ID | ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('**__ Members Count | عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__ Online | الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__ Verification Level | مستوي الحمايه__**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__ Region | البلد__**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__ Text Channels | رومات كتابيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__ Voice Channels | رومات صوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__ Created At | صنع في __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('message', message => {
 
    if (message.content === "-bot") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()
 
.addField('**Bot Servers**',`[ ${client.guilds.size} ]`)
.addField('**Users**',`[ ${client.users.size} ]`)
.addField('**Channels**',`[ ${client.channels.size} ]`)
.addField('**ID**',`[ ${client.user.id} ]`)
.addField('**Name**',`[ ${client.user.tag} ]`)
.addField('Requested by:', "<@" + message.author.id + ">")
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
}
 
});

client.on('message', message => {
	var prefix = "-"
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات `);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});

client.on('message', msg => {
  if (msg.content === 'هيثو كفوالحين صرت محترم') {
    msg.reply('**كل زق اقولك**');
  }
});

client.on("message", (message) => {
	var prefix = "-"
      
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
 
 
 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });

client.on('message', async message => {
	var prefix = "-"
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {  // حقوق الفا كومينتي
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => { // حقوق الفا كومينتي
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
  }
});

client.login(process.env.BOT_TOKEN);
