module.exports = async (bot) => {
    setInterval(async() => {
        var rnd = Math.floor(Math.random() * 2);
        switch (rnd) {
          case 1:
            {
                const Discord = require('discord.js')
                
              require('../../modules/data')();
              do {
                var rand = Math.floor(Math.random()*35000);
                //console.log(rand); 
        
                animeData = await getAnimeData(rand);
                //console.log(animeData.error == null);
            }
            while(animeData.error != null);
        
            if(animeData.error == null) {
                //console.log(animeData);
                //console.log(animeData.title); 
                //console.log(animeData.synopsis); 
        
                if(animeData.aired != null) {
                    var date = new Date(animeData.aired.from);
                    //console.log(date.getFullYear());
                }
            const fetch = require('node-fetch');
                let animeEmbed = new Discord.MessageEmbed()
                .setTitle("**Anime:\n__" + animeData.title+" ["+date.getFullYear()+"]__**")
                .setAuthor("MyAnimeList", "https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png")
                .setColor("#4286f4")
        
                //Image URL
                if(animeData.image_url != null) 
                    animeEmbed.setImage(animeData.image_url);
        
                //Synopsis
                if(animeData.synopsis != null) 
                    animeEmbed.setDescription(animeData.synopsis);
        
                //MAL URL
                animeEmbed.addField("MyAnimeList Url", `[LINK](${animeData.url})`)
        
        if(animeData.image_url != null) 
                    animeEmbed.setThumbnail(animeData.image_url);
        
                //Trailer URL
                if(animeData.trailer_url != null)
                    animeEmbed.addField("Trailer Url", `[LINK](${animeData.trailer_url})`);
        
                //Episodes
                if(animeData.episodes != null) 
                    animeEmbed.addField("Episode(s)", animeData.episodes, true);
        
                //Rating
                if(animeData.rating != null) 
                    animeEmbed.addField("Rating", animeData.rating, true);
        
                //Studios
                if(animeData.studios != null && animeData.studios.length > 0) {
                    var studios = "";
                    for(var i = 0; i < animeData.studios.length; i++) {
                        studios += animeData.studios[i].name
                        if(i != animeData.studios.length-1)
                            studios += ", "
                    }
                    animeEmbed.addField("Studio(s)", studios, true);
                }
        
                //Score
                if(animeData.score != null) 
                    animeEmbed.addField("Score", animeData.score, true);
        
                //Genres
                if(animeData.genres != null && animeData.genres.length > 0) {
                    var genres = "";
                    for(var i = 0; i < animeData.genres.length; i++) {
                        genres += animeData.genres[i].name
                        if(i != animeData.genres.length-1)
                            genres += ", "
                    }
                    animeEmbed.addField("Genre(s)", genres, true);
                }
        
                //Music
                if(animeData.opening_themes != null && animeData.opening_themes.length > 0) {
                    var openings = "";
                    for(var i = 0; i < animeData.opening_themes.length; i++)
                        openings += animeData.opening_themes[i] + "\n";
        
                    animeEmbed.addField("Opening(s)", openings);
                }
        
                if(animeData.ending_themes != null && animeData.ending_themes.length > 0) {
                    var endings = "";
                    for(var i = 0; i < animeData.ending_themes.length; i++)
                        endings += animeData.ending_themes[i] + "\n";
        
                    animeEmbed.addField("Ending(s)", endings);
                }
              
                     bot.channels.cache.get(`824332979554877470`).send(animeEmbed)
                
              
                
                }
            }
            break
        }
      }, 20000)
    
    const cheerio = require('cheerio');
      setInterval(async() => {
          var rnd = Math.floor(Math.random() * 2);
          switch (rnd) {
            case 1:
              {
       let random = Math.floor(Math.random() * 107)
          let text = await fetch(`https://hdqwalls.com/category/anime-wallpapers/page/${random}`, { method: "GET" })
          text = await text.text()
          let $ = cheerio.load(text)
          let images = []
      
          $('img[class="thumbnail img-responsive custom_width"]').each(function(i, elem) {
            images.push($(this).attr('src'));
          });
      
      
          let limit = images.length
          let pg = 0;
          let embed = new Discord.MessageEmbed()
            .setColor("#FF69B4")
            .setTitle('Wallpaper')
            .setImage(images[0].replace("/thumb", ""))
          bot.channels.cache.get(`824333129660498022`).send(embed)
          
        }
        break
    }
    }, 20000)
    setInterval(async() => {
        var rnd = Math.floor(Math.random() * 2);
        let rnd2 = Math.floor(Math.random()*35000);
        switch (rnd) {
          case 1:
            {
                var results = await kitsu.listManga(rnd2);
                var aniresult = results[0].attributes;
                if (!aniresult.titles) throw "No result found";
                let embed = new Discord.MessageEmbed()
                .setTitle('Manga')
                .setURL(`https://kitsu.io/manga/${aniresult.slug}`)
                .setDescription([` \`${aniresult.canonicalTitle || aniresult.titles.en || aniresult.titles.en_jp}\` `, aniresult.synopsis])
                .setColor('RANDOM')
                .addField("Rating:", `${aniresult.averageRating || 0}% Approval`, true)
                .addField("Episodes:",  `${aniresult.episodeCount || 0} (${aniresult.subtype})`,true)
                .addField("Status:", aniresult.status == "tba" ? "TBA" : `${aniresult.status.charAt(0).toUpperCase()}${aniresult.status.substr(1).toLowerCase()}`)
                .setImage( aniresult.posterImage.small)
                  bot.channels.cache.get(`824333126884786206`).send(embed)
              //"title": aniresult.canonicalTitle || aniresult.titles.en || aniresult.titles.en_jp,
              //"url": `https://kitsu.io/anime/${aniresult.slug}`,
              //"description": client.cleanSyn(aniresult.synopsis),
              //"color": client.colorInt("#fd8320"),
              //"image": { "url": aniresult.posterImage.small },
              //"fields": [
                //{ "name": "Rating:", "value": `${aniresult.averageRating || 0}% Approval`, "inline": true },
                //{ "name": "Episodes:", "value":  `${aniresult.episodeCount || 0} (${aniresult.subtype})`, "inline": true },
                //{ "name": "Status:", "value": aniresult.status == "tba" ? "TBA" : `${aniresult.status.charAt(0).toUpperCase()}${aniresult.status.substr(1).toLowerCase()}`, "inline": true }
                
              //]
              
    
        }
        break
    }
    }, 20000)
    
}