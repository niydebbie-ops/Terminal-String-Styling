// ========================================
// Terminal Styling Practice Programs
// Programs 3 to 15
// Run with: node practice.js
// ========================================

// Define header function FIRST
function header(title) {
  const cyan = '\x1b[36m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';
  const line = "═".repeat(title.length + 6);
  console.log(`${cyan}${bold}╔${line}╗${reset}`);
  console.log(`${cyan}${bold}║   ${title}   ║${reset}`);
  console.log(`${cyan}${bold}╚${line}╝${reset}\n`);
}

// ========================================
// PROGRAM 3: Text Styling Demo
// ========================================
header("PROGRAM 3: Text Styling Demo");
function program3_textStyling() {
  const bold = '\x1b[1m', dim = '\x1b[2m', italic = '\x1b[3m', underline = '\x1b[4m', reset = '\x1b[0m';
  console.log(`${bold}This is BOLD text${reset}`);
  console.log(`${dim}This is DIM text${reset}`);
  console.log(`${italic}This is ITALIC text${reset}`);
  console.log(`${underline}This is UNDERLINED text${reset}`);
  console.log(`\x1b[31m\x1b[1mThis is BOLD and RED${reset}`);
}
program3_textStyling();


// ========================================
// PROGRAM 4: Background Colors
// ========================================
header("PROGRAM 4: Background Colors");
function program4_backgrounds() {
  const bgRed = '\x1b[41m', bgGreen = '\x1b[42m', bgYellow = '\x1b[43m', bgBlue = '\x1b[44m', white = '\x1b[37m', black = '\x1b[30m', reset = '\x1b[0m';
  console.log(`${bgRed}${white} Red Background ${reset}`);
  console.log(`${bgGreen}${black} Green Background ${reset}`);
  console.log(`${bgYellow}${black} Yellow Background ${reset}`);
  console.log(`${bgBlue}${white} Blue Background ${reset}`);
}
program4_backgrounds();

// ========================================
// PROGRAM 5: Menu System
// ========================================
header("PROGRAM 5: Menu System");
function program5_menuSystem() {
  const cyan = '\x1b[36m', green = '\x1b[32m', yellow = '\x1b[33m', bold = '\x1b[1m', reset = '\x1b[0m';
  console.log(`${cyan}${bold}╔════════════════════════════╗${reset}`);
  console.log(`${cyan}${bold}║        MAIN MENU           ║${reset}`);
  console.log(`${cyan}${bold}╚════════════════════════════╝${reset}`);
  console.log(`${green}1.${reset} Start Game`);
  console.log(`${green}2.${reset} Settings`);
  console.log(`${green}3.${reset} High Scores`);
  console.log(`${yellow}4.${reset} Exit`);
}
program5_menuSystem();

// ========================================
// PROGRAM 6: Progress Bar
// ========================================
header("PROGRAM 6: Progress Bar");
async function program6_progressBar() {
  const green = '\x1b[32m', reset = '\x1b[0m';
  function showProgress(percent, label) {
    const filled = Math.floor(percent / 2);
    const empty = 50 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    process.stdout.write(`\r${green}${bar}${reset} ${percent}% - ${label}`);
  }
  console.log("Downloading file...");
  for (let i = 0; i <= 100; i += 10) {
    showProgress(i, "Please wait...");
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  console.log("\n✓ Download complete!");
}
// Uncomment to run:
// program6_progressBar();

// ========================================
// PROGRAM 7: Status Messages
// ========================================
header("PROGRAM 7: Status Messages");
function program7_statusMessages() {
  const green = '\x1b[32m', red = '\x1b[31m', yellow = '\x1b[33m', reset = '\x1b[0m';
  const symbols = { success: `${green}✓${reset}`, error: `${red}✗${reset}`, pending: `${yellow}⋯${reset}` };
  function status(message, type) { console.log(`${symbols[type]} ${message}`); }
  status("Server started successfully", "success");
  status("Database connection established", "success");
  status("Waiting for user input", "pending");
  status("Failed to load plugin", "error");
}
program7_statusMessages();

// ========================================
// PROGRAM 8: Timestamp Logger
// ========================================
header("PROGRAM 8: Timestamp Logger");
function program8_timestampLogger() {
  const gray = '\x1b[90m', cyan = '\x1b[36m', reset = '\x1b[0m';
  function log(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`${gray}[${time}]${reset} ${cyan}${message}${reset}`);
  }
  log("User logged in");
  log("Fetching data from API");
  log("Data processing complete");
}
program8_timestampLogger();

// ========================================
// PROGRAM 9: Error Handler
// ========================================
header("PROGRAM 9: Error Handler");
function program9_errorHandler() {
  const red = '\x1b[31m', yellow = '\x1b[33m', bold = '\x1b[1m', reset = '\x1b[0m';
  function handleError(errorType, message, details) {
    console.log(`\n${red}${bold}ERROR:${reset} ${errorType}`);
    console.log(`${yellow}Message:${reset} ${message}`);
    if (details) console.log(`${yellow}Details:${reset} ${details}`);
  }
  handleError("TypeError", "Cannot read property 'name' of undefined", "Line 42");
  handleError("ConnectionError", "Failed to connect to database", "Timeout after 5000ms");
}
program9_errorHandler();

// ========================================
// PROGRAM 10: Table Display
// ========================================
header("PROGRAM 10: Table Display");
function program10_tableDisplay() {
  const cyan = '\x1b[36m', green = '\x1b[32m', yellow = '\x1b[33m', bold = '\x1b[1m', reset = '\x1b[0m';
  const users = [
    { id: 1, name: "Alice", status: "Active" },
    { id: 2, name: "Bob", status: "Active" },
    { id: 3, name: "Charlie", status: "Inactive" }
  ];
  console.log(`${cyan}${bold}┌──────┬─────────────┬──────────┐${reset}`);
  console.log(`${cyan}${bold}│ ID   │ Name        │ Status   │${reset}`);
  console.log(`${cyan}${bold}├──────┼─────────────┼──────────┤${reset}`);
  users.forEach(user => {
    const statusColor = user.status === "Active" ? green : yellow;
    console.log(`│ ${user.id}   │ ${user.name.padEnd(11)} │ ${statusColor}${user.status.padEnd(8)}${reset} │`);
  });
  console.log(`${cyan}${bold}└──────┴─────────────┴──────────┘${reset}`);
}
program10_tableDisplay();

// ========================================
// PROGRAM 11: Loading Animation
// ========================================
header("PROGRAM 11: Loading Animation");
async function program11_loadingAnimation() {
  const cyan = '\x1b[36m', reset = '\x1b[0m';
  const frames = ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'];
  let i = 0;
  console.log("Loading animation demo:");
  const interval = setInterval(() => {
    process.stdout.write(`\r${cyan}${frames[i]}${reset} Loading...`);
    i = (i + 1) % frames.length;
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    process.stdout.write('\r✓ Complete! \n');
  }, 3000);
}
// Uncomment to run:
// program11_loadingAnimation();


// ========================================
// PROGRAM 12: Diff Viewer
// ========================================
header("PROGRAM 12: Diff Viewer");
function program12_diffViewer() {
  const green = '\x1b[32m';
  const red = '\x1b[31m';
  const reset = '\x1b[0m';

  function showDiff(oldLines, newLines) {
    console.log("Changes:");
    oldLines.forEach(line => {
      console.log(`${red}- ${line}${reset}`);
    });
    newLines.forEach(line => {
      console.log(`${green}+ ${line}${reset}`);
    });
  }

  const oldCode = [
    "const x = 10;",
    "console.log(x);"
  ];

  const newCode = [
    "const x = 20;",
    "const y = 5;",
    "console.log(x + y);"
  ];

  showDiff(oldCode, newCode);
}
program12_diffViewer();


// ========================================
// PROGRAM 13: Colored JSON
// ========================================
header("PROGRAM 13: Colored JSON");
function program13_coloredJSON() {
  const blue = '\x1b[34m', green = '\x1b[32m', yellow = '\x1b[33m', reset = '\x1b[0m';
  const data = { name: "John Doe", age: 30, isActive: true };
  console.log("{");
  console.log(` ${blue}"name"${reset}: ${green}"${data.name}"${reset},`);
  console.log(` ${blue}"age"${reset}: ${yellow}${data.age}${reset},`);
  console.log(` ${blue}"isActive"${reset}: ${yellow}${data.isActive}${reset}`);
  console.log("}");
}
program13_coloredJSON();

// ========================================
// PROGRAM 14: Box Messages
// ========================================
header("PROGRAM 14: Box Messages");
function program14_boxMessages() {
  const cyan = '\x1b[36m', bold = '\x1b[1m', reset = '\x1b[0m';
  function box(message, color = cyan) {
    const line = '─'.repeat(message.length + 2);
    console.log(`${color}${bold}┌${line}┐${reset}`);
    console.log(`${color}${bold}│${reset} ${message} ${color}${bold}│${reset}`);
    console.log(`${color}${bold}└${line}┘${reset}`);
  }
  box("Welcome to the Application!");
  console.log();
  box("Successfully saved!", '\x1b[32m');
}
program14_boxMessages();

// ========================================
// PROGRAM 15: Complete Logger Class
// ========================================
header("PROGRAM 15: Complete Logger Class");
function program15_completeLogger() {
  class Logger {
    static colors = {
      reset: '\x1b[0m',
      gray: '\x1b[90m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      cyan: '\x1b[36m'
    };
    static timestamp() {
      return new Date().toISOString().split('T')[1].split('.')[0];
    }
    static log(level, color, message) {
      const time = `${this.colors.gray}[${this.timestamp()}]${this.colors.reset}`;
      const tag = `${color}[${level}]${this.colors.reset}`;
      console.log(`${time} ${tag} ${message}`);
    }
    static info(msg) { this.log('INFO', this.colors.cyan, msg); }
    static success(msg) { this.log('SUCCESS', this.colors.green, msg); }
    static warn(msg) { this.log('WARN', this.colors.yellow, msg); }
    static error(msg) { this.log('ERROR', this.colors.red, msg); }
    static debug(msg) { this.log('DEBUG', this.colors.blue, msg); }
  }
  // Usage example
  Logger.info("Starting application");
  Logger.debug("Loading configuration");
  Logger.success("Configuration loaded");
  Logger.warn("Using default settings");
  Logger.error("Could not connect to external service");
}
program15_completeLogger();

console.log("\n\n" + "=".repeat(50));
console.log("All programs completed!");
console.log("=".repeat(50) + "\n");