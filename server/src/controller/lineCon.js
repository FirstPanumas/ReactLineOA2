const line = require("@line/bot-sdk");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const lineConfig = {
  chanelAccessToken: env.LINE_ACCESS_TOKEN,
  channelSecret: env.LINE_SECRET_TOKEN,
};

exports.get_lineapi = async (req, res) => {
  // const test = await prisma.user.findMany();
  res.send({ data: lineConfig });
};
//console.log(lineConfig);

exports.post_lineapi =
  (line.middleware(lineConfig),
  async (req, res) => {
    try {
      const events = req.body.events;
      console.log("event =>>>>", events);
      return events.length > 0
        ? await events.map((item) => handleEvent(item))
        : res.status(200).send("OK");
    } catch (error) {
      res.status(500).end();
    }
  });

const handleEvent = async (event) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return null;
  } else if (event.type === "message") {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "test",
    });
  }
  // console.log(event);
  // console.log(event.replyToken);
};
