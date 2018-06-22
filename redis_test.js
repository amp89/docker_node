const redis = require("redis");

const redisClient = redis.createClient(6379,"localhost");

redisClient.on("connect", () => {
    console.log("Redis connected :)")
})

redisClient.on("error", (err) => {
    console.error("Redis screwed up :( ",err)
})

redisClient.set("imakey","helloooo");


redisClient.get("imakey", (err,res) => {
    if(err){
        console.error("NO: ", err);
    }else{
        console.log("redis did not screw up! res: ", res);
    }
})