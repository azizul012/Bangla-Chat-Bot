const login = require("ws3-fca");
const fs = require("fs");

// appstate.json ফাইল থেকে লগইন তথ্য লোড করুন
const appstate = JSON.parse(fs.readFileSync('appstate.json', 'utf8'));

login({ appState: appstate }, (err, api) => {
  if (err) {
    console.error("Login failed:", err);
    if (err.error === 'login_appstate_mismatch') {
      console.error("Appstate mismatch. Please try generating a new appstate.json file.");
    }
    return;
  }

  api.listen((err, message) => {
    if (err) return console.error(err);

    api.sendTypingIndicator(message.threadID, (err) => {
      if (err) return console.error(err);

      setTimeout(() => {
        if (message.body === "কেমন আছো?") {
          api.sendMessage("আমি ভালো আছি, তুমি কেমন আছো?", message.threadID);
        } else if (message.body === "তুমি কে?") {
          api.sendMessage("আমি একজন বট, কিন্তু আমি মানুষের মতো কথা বলি।", message.threadID);
        } else if (message.body.toLowerCase().includes("goat")) {
          api.sendMessage("আমি জানি না গো, আমাকে জিজ্ঞাসা করে লাভ নেই।", message.threadID);
        } else {
          api.sendMessage("আমি তোমার কথা বুঝতে পারিনি, আবার বলো।", message.threadID);
        }
      }, 2000);
    });
  });
});
