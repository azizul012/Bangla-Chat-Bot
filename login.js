const login = require("fca-unofficial");
const fs = require("fs");

const credentials = {
  email: "",
  password: "আপনার_পাসওয়ার্ড_এখানে"
};

login(credentials, (err, api) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));
  console.log("appstate.json ফাইলটি সফলভাবে তৈরি হয়েছে!");
  process.exit(0);
});
