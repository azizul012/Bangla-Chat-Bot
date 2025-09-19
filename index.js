const express = require("express");
const { spawn } = require("child_process");
const fs = require("fs"); // 'fs' মডিউলটি ফাইল পড়ার জন্য যোগ করা হয়েছে।

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
    let login = null;
    try {
        appState = JSON.parse(fs.readFileSync('appstate.json'utf8'));
    } catch (err) {
        console.error("Error appstate.json);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
state.json);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
nappstate.jsonjs);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
 err);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
 file:", err);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
utf8'));
    } catch (err) {
        console.error("Error loading login.js file:", err);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
, 'utf8'));
    } catch (err) {
        console.error("Error loading login.js file:", err);
        return; // appstate ফাইল না পেলে বট রান করা বন্ধ করুন
    }

    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        console.log(`Child process exited with code ${code}.`);
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


startProject();
