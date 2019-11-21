(function () {
	"use strict";
	const Discord = require("discord.js"),
		  auth = require("./auth.json"),
		  prefix = auth.prefixEV,
		  client = new Discord.Client({autoReconnect: true}),
		  refOrder = "bgrpwy";
	var solve = function (outCol, inCol) {
			var outerRev = outCol.split("").reverse(), //To flip input to ascending
				innerRev = inCol.split("").reverse(),  //order and force array form.
				rings = [], threes = 0, natLefts = 0, skips = 0, resultStr = ``;
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

	client.OWNERID = auth.ownerid;

	// The ready event is vital, it means that your bot will only start reacting to information
	// from Discord _after_ ready is emitted
	client.on("ready", () => {
		console.log("EV Bot available.");
	});

	// Create an event listener for messages
	client.on("message", message => {
		// It's good practice to ignore other bots. This also makes your bot ignore itself
		// and not get into a spam loop (we call that "botception").
		if (!(message.author.bot) && (message.content.indexOf(prefix) === 0) ) {
			var channel = message.channel,
				input = message.content.substring(4,).toLowerCase(),
				pass = 0;
			input.length !== 9 ? message.channel.send("Input has an incorrect number of characters!") : pass++;
			( input.indexOf("/") !== 4 || (input.indexOf("/", 5) !== -1) ) ? message.channel.send("Delimiter / not found or incorrect format!") : pass++;
			var	[outer, inner] = input.split("/");
			!( /^[bgrpwy]+$/.test(outer) && /^[bgrpwy]+$/.test(inner) ) ? message.channel.send("Input contains incorrect characters!") : pass++;
			pass === 3 && message.channel.send(solve(outer, inner));
		}
	});

	// Log our bot in
	client.login(auth.tokenEV);
}());
