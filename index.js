const login = require("fb-chat-api");

const credentials = {
  email: "mullatusher5@gmail.com",
  password: "dadavai@01"
};

login(credentials, (err, api) => {
  if (err) return console.error(err);

  api.listen((err, message) => {
    if (err) return console.error(err);

    api.sendTypingIndicator(message.threadID, (err) => {
      if (err) return console.error(err);

      setTimeout(() => {
        if (message.body === "কেমন আছো?") {
          api.sendMessage("আমি ভালো আছি, তুমি কেমন আছো?", message.threadID);
        } else if (message.body === "তুমি কে?") {
          api.sendMessage("আমি একজন বট, কিন্তু আমি মানুষের মতো কথা বলি।", message.threadID);
        } else {
          api.sendMessage("আমি তোমার কথা বুঝতে পারিনি, আবার বলো।", message.threadID);
        }
      }, 2000); // 2000 milliseconds = 2 seconds
    });
  });
});
