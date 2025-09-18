const express = require("express");
const { spawn } = require("child_process");

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
