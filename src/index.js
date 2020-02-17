"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load up the discord.js library
const Discord = require("discord.js");
const ranking_1 = require("./ranking");
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const apiCaller = new ranking_1.API("RGAPI-062d9d68-7ec3-4081-893f-d6a044a041d3", "EUW1");
console.log(apiCaller.json_result);
apiCaller.greet();
apiCaller.json_result = {
    "elio": "BEST WAR EUW"
};
console.log(apiCaller.json_result);
// apiCaller.get_champions(apiCaller.accessorDictionary["championsDict"]).then(() => {console.log(apiCaller.get_json())})
() => __awaiter(void 0, void 0, void 0, function* () {
    apiCaller.json_result = yield apiCaller.get_champions(apiCaller.accessorDictionary["championsDict"]);
    console.log(apiCaller.get_json());
});
console.log(apiCaller.json_result);
console.log(apiCaller.get_json());
// console.log(apiCaller.get_json());
// console.log(apiCaller.fetch_json(apiCaller.accessorDictionary["championsDict"]));
// console.log(apiCaller.get_champions(apiCaller.accessorDictionary["championsDict"]));
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log("Bot is up and running!");
});
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    // This event will run on every single message received, from any channel or DM.
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot)
        return;
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if (message.content.indexOf(config.prefix) !== 0)
        return;
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Let's go with a few common example commands! Feel free to delete or change those.
    if (command === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = yield message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    if (command === "say") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }
}));
client.login(config.token);
//# sourceMappingURL=index.js.map