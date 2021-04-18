const fs = require('fs');
const request = require('request');

module.exports = function() {
	this.getAnimeData = function(animeID) {

		return new Promise(function(resolve, reject) {

			var URL = "https://api.jikan.moe/v3/anime/" + animeID;
			request(URL, function(err, response, body) {
				//console.log(err);
				if(!err) {
					//console.log(JSON.parse(body));
					resolve(JSON.parse(body));
				}
				else {
					reject(err);
				}

			});
		});
	};

	this.getMangaData = function(mangaID) {

		return new Promise(function(resolve, reject) {

			var URL = "https://api.jikan.moe/v3/manga/" + mangaID;
			request(URL, function(err, response, body) {
				//console.log(err);
				if(!err) {
					//console.log(JSON.parse(body))
					resolve(JSON.parse(body));
				}
				else {
					reject(err);
				}

			});
		});
	};

	this.getScheduleData = function(day) {

		return new Promise(function(resolve, reject) {

			var URL = "https://api.jikan.moe/v3/schedule/" + day;
			request(URL, function(err, response, body) {
				//console.log(err);
				if(!err) {
					//console.log(JSON.parse(body));
					resolve(JSON.parse(body));
				}
				else {
					reject(err);
				}

			});
		});
	};

	this.getGenreData = function(type, genreID, pageNum) {
		console.log(type, genreID, pageNum);

		return new Promise(function(resolve, reject) {

			var URL = "https://api.jikan.moe/v3/genre/"+type+"/"+genreID+"/"+pageNum;
			console.log(URL);
			request(URL, function(err, response, body) {
				//console.log(err);
				if(!err) {
					//console.log(JSON.parse(body));
					resolve(JSON.parse(body));
				}
				else {
					reject(err);
				}

			});
		});
	}

}

module.exports.help = {
	name: "data-retrieving"
}