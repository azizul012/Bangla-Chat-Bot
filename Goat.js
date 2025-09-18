const login = require("fca-unofficial");
const fs = require("fs");
const axios = require("axios"); // axios লাইব্রেরি API কল করার জন্য

// appstate.json ফাইল থেকে লগইন তথ্য লোড করুন
const appstate = JSON.parse(fs.readFileSync('appstate.json', 'utf8'));

// আপনার Gemini API কী এখানে দিন
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";

login({ appState: appstate }, (err, api) => {
  if (err) {
    if (err.error === 'login_appstate_mismatch') {
      console.error("Appstate mismatch. Please try generating a new appstate.json file.");
    }
    return console.error("Login failed:", err);
  }

  api.listen(async (err, message) => { // async ব্যবহার করা হয়েছে যাতে API কল করা যায়
    if (err) return console.error(err);
    if (!message.body) return; // যদি মেসেজ খালি হয়, তাহলে কিছু করবে না

    api.sendTypingIndicator(message.threadID, (err) => {
      if (err) return console.error(err);

      // AI-কে মেসেজ পাঠানো
      const prompt = message.body;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

      setTimeout(async () => {
        try {
          const response = await axios.post(url, {
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ]
          });
          const aiResponse = response.data.candidates[0].content.parts[0].text;
          api.sendMessage(aiResponse, message.threadID);
        } catch (apiErr) {
          console.error("AI API Error:", apiErr);
          api.sendMessage("Sorry, I can't generate a response right now.", message.threadID);
        }
      }, 2000); // 2 সেকেন্ডের বিলম্ব
    });
  });
});
