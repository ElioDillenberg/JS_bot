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
const node_fetch_1 = require("node-fetch");
// import { SCHED_NONE } from "cluster";
// version = () => {
//     return fetch("https://ddragon.leagueoflegends.com/api/versions.json")
//     .then()
// }
class API {
    constructor(APIKey, region) {
        this.routingPlatforms = {
            "BR1": "br1.api.riotgames.com",
            "EUN1": "eun1.api.riotgames.com",
            "EUW1": "euw1.api.riotgames.com",
            "JP1": "jp1.api.riotgames.com",
            "KR": "kr.api.riotgames.com",
            "LA1": "la1.api.riotgames.com",
            "LA2": "la2.api.riotgames.com",
            "NA1": "na1.api.riotgames.com",
            "OC1": "oc1.api.riotgames.com",
            "TR1": "tr1.api.riotgames.com",
            "RU": "ru.api.riotgames.com",
        };
        this.routingRegions = {
            "BR1": "americas.api.riotgames.com",
            "EUN1": "europe.api.riotgames.com",
            "EUW1": "europe.api.riotgames.com",
            "JP1": "asia.api.riotgames.com",
            "KR": "asia.api.riotgames.com",
            "LA1": "americas.api.riotgames.com",
            "LA2": "americas.api.riotgames.com",
            "NA1": "americas.api.riotgames.com",
            "OC1": "asia.api.riotgames.com",
            "TR1": "europe.api.riotgames.com",
            "RU": "europe.api.riotgames.com",
        };
        this.queues = {
            "Solo/Duo": "420",
            "Flex": "440",
            "Blind Pick": "430",
            "Draft Pick": "400",
            "ARAM": "450",
            "URF": "900"
        };
        this.seasonIDs = {
            "2020": 13,
            "2019": 12,
        };
        // function getUser(name){
        //     fetch(`https://api.github.com/users/${name}`)
        //      .then(function(response) {
        //        return response.json();
        //      })
        //      .then(function(json) {
        //        console.log(json);
        //      });
        //    };
        //    get user data
        //    getUser('yourUsernameHere');
        // version = this.fetch_json("https://ddragon.leagueoflegends.com/api/versions.json");
        this.ddragonUrl2 = "http://ddragon.leagueoflegends.com/cdn/";
        this.get_json = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.json_result;
        });
        this.fetch_json = (url) => __awaiter(this, void 0, void 0, function* () {
            console.log("fetch_json");
            try {
                let response = yield node_fetch_1.default(url);
                let data = yield response.json();
                //
                // MANIPULATION DE JSON
                //
                // 
                //
                return data;
            }
            catch (err) {
                console.error(err);
                return -1;
            }
        });
        this.get_champions = (param) => __awaiter(this, void 0, void 0, function* () {
            console.log("get_champions");
            return yield this.fetch_json(param);
            // return results
        });
        this.APIKey = APIKey;
        this.region = region;
        this.json_result = {
            "1": 1
        };
        this.accessorDictionary = {
            "summonerDTO": this.routingPlatforms[this.region] + "/lol/summoner/v4/summoners/by-name/",
            "summonerRankedStats": this.routingPlatforms[this.region] + "/lol/league/v4/entries/by-summoner/",
            "championMastery": this.routingPlatforms[this.region] + "/lol/champion-mastery/v4/champion-masteries/by-summoner/",
            "championsDict": this.ddragonUrl2 + "10.2.1/data/fr_FR/champion.json",
            "itemsDict": this.ddragonUrl2 + "10.2.1/data/fr_FR/item.json",
            // "championStats": this.ddragonUrl + "/data/fr_FR/champion/",
            // "images": this.ddragonUrl+"/img/",
            "matchHistory": this.routingPlatforms[this.region] + "/lol/match/v4/matchlists/by-account/",
            "currentMatch": this.routingPlatforms[this.region] + "/lol/spectator/v4/active-games/by-summoner/"
        };
        // this.champions = this.fetch_json(this.accessorDictionary["championsDict"]);
        // this.fetch_json(this.accessorDictionary["championsDict"])
        // async this.champions = await this.fetch_json(this.accessorDictionary["championsDict"]);
        // const get_champions = async (toDefine, url) => {
        //     toDefine = await this.fetch_json(url);
        //     console.log(toDefine);
        // }
        // let lol = async () => {
        //     return await this.get_champions(this.accessorDictionary["championsDict"]);
        // }
        // this.json_result = this.get_champions(this.accessorDictionary["championsDict"]);
        // console.log(this.json_result);
        // .then(data => console.log(this.champions))
        // this.champions = fetch(this.accessorDictionary["championsDict"].then(res => res.json()).catch(error => console.log(error)))
        // console.log("Champions = " + this.champions);
        // this.items = this.fetch_json(this.accessorDictionary["itemsDict"])
        // console.log("Items = " + this.items)
    }
    ;
    greet() {
        console.log("Hello");
    }
    ;
}
exports.API = API;
//# sourceMappingURL=ranking.js.map