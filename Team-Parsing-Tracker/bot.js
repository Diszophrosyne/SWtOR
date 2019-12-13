(function () {
	"use strict";
	const Discord = require("discord.js"),
	      auth = require("./auth.json"),
	      prefix = auth.prefixParse,
	      client = new Discord.Client({autoReconnect: true}),
	      roles = ["Tank","DPS","Healer"],
	      specs = ["Darkness/Kinetic Combat","Immortal/Defense","Shield Tech/Shield Specialist","Annihilation/Watchman","Carnage/Combat",
			"Fury/Concentration","Marksman/Sharpshooter","Virulence/Dirty Fighting","Engineering/Saboteur","Lethality/Ruffian",
			"Concealment/Scrapper","Vengeance/Vigilance","Rage/Focus","Arsenal/Gunnery","Innovative Ordinace/Assault Specialist",
			"Lightning/Telekinetics","Madness/Balance","Deception/Infiltration","Hatred/Serenity","Pyrotech/Plasmatech",
			"Advanced Prototype/Tactics","Corruption/Seer","Bodyguard/Combat Medic","Medicine/Sawbones"];
	var dbs = require(./teamParses.json), //array of team objects
	    dbsLookup = function (str) {
		return dbs.filter(team => team.name === str);
	    },
	    nameTeam = function (str1, str2) {
		var team = dbsLookup(str1);
		str2 ? team && (team.name = str2) : dbs.push(new Object.name = str1);
	    },
	    displayTeam = function (name) {



	    },
	    listTeams = function () {



	    },
	    verifyMember = function (player) {



	    },
	    addMember = function (player) {
		verifyMember(player);


	    },
	    removeMember = function (player) {
		verifyMember(player);


	    },
	    displayMember = function (player) {
		verifyMember(player);


	    },
	    updateParse = function (player, spec, value) {
		verifyMember(player);


	    },
	    addSpec = function (player, spec) {
		verifyMember(player);


	    },
	    removeSpec = function (player, spec) {
		verifyMember(player);


	    };


	client.OWNERID = auth.ownerid;

	// The ready event is vital, it means that your bot will only start reacting to information
	// from Discord _after_ ready is emitted
	client.on("ready", () => {
		console.log("Parse Bot available.");
	});

	// Create an event listener for messages
	client.on("message", message => {
		// It's good practice to ignore other bots. This also makes your bot ignore itself
		// and not get into a spam loop (we call that "botception").

		if (!(message.author.bot) && (message.content.indexOf(prefix) === 0) ) {
			var channel = message.channel,
				input = message.content.substring(4,).toLowerCase();




/*
			input.length !== 9 ? channel.send("Input has an incorrect number of characters!") : pass++;

			( input.indexOf("/") !== 4 || (input.indexOf("/", 5) !== -1) ) ? channel.send("Delimiter / not found or incorrect format!") : pass++;

			var	[outer, inner] = input.split("/");

			!( /^[bgrpwy]+$/.test(outer) && /^[bgrpwy]+$/.test(inner) ) ? channel.send("Input contains incorrect characters!") : pass++;

			pass === 3 && channel.send(solve(outer, inner));
*/
		}
	});

	// Log our bot in
	client.login(auth.tokenParse);
}());





... 


/*
	var solve = function (outCol, inCol) {
			var outerRev = outCol.split("").reverse(), //To flip input to ascending
				innerRev = inCol.split("").reverse(),  //order and force array form.
				resultStr = ``;
			for (let i = 0; i < 4; i++) {
				let turns = refOrder.indexOf(innerRev[i]) - refOrder.indexOf(outerRev[i]),
					turnsAbs = Math.abs(turns),
					direction = turns > 0;
				if (turnsAbs < 4) {
					turns = turnsAbs;
					if (turns === 3) {
						threes++;
						direction = 1;
					} else if (turns === 0) {
						skips++;
					} else {direction && natLefts++;
					}
				} else {
					turns = 6 - turnsAbs;
					direction = !direction;
				}
				rings[i] = {"turns": turns, "direction": direction};
			}
			for (const ring of rings) {
				ring.turns === 3 &&
				( (2*natLefts >= (4 - (threes + skips)) || threes === 4) ?
				ring.direction = 1 : ring.direction = 0 );

				//format results to a displayable string to return
				resultStr += ring.turns ? `${ring.turns}${ring.direction ? "L":"R"} `: "0 ";
			}
			return resultStr;
		};
*/