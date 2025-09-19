const login = require("fca-unofficial");
const fs = require("fs");

const credentials = {
  email: "mullatusher5@gmail.com",
  password: "dadavai\#01"
};

login(credentials, (err, api) => {
  if (err) {
    consol5@gmail.com",
  password: "dadavai#01"
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
