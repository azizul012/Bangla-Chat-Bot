const express = require("express");
const { spawn } = require("child_process");
const fs = require("fs");

// === Express server to keep Render service alive ===
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("EREN BOT RUNNING \n Author: Eren \n Status: smooth 🥵");
});

app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`);
});

// === Start the Goat bot process ===
function startProject() {
	// appstate.json ফাইল থেকে অ্যাপস্টেট লোড করার চেষ্টা করুন
	let appState = null;
	try {
		appState = JSON.parse(fs.readFileSync('appstate.json', 'utf8'));
	} catch (err) {
		console.error("Error loading appstate.json file:", err);
		// Restart the bot if it exits unexpectedly
		if (err.code !== 'ENOENT') {
			console.log("Restarting the bot due to appstate error...");
			startProject();
		}
		return;
	}

	const child = spawn("node", ["Goat.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		console.log(`Child process exited with code ${code}.`);
		// Restart the bot if it exits unexpectedly
		if (code !== 0) {
			console.log("Restarting the bot...");
			startProject();
		}
	});

	child.on("error", (error) => {
		console.error("Failed to start child process:", error);
	});
}

startProject();
