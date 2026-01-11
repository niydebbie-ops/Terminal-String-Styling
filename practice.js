// ========================================
// PROGRAM 3: Text Styling Demo
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 3: Text Styling Demo ===\n");

function program3_textStyling() {
  // ANSI style codes
  const bold = '\x1b[1m';
  const dim = '\x1b[2m';
  const italic = '\x1b[3m';
  const underline = '\x1b[4m';
  const reset = '\x1b[0m'; // reset back to default style

  // Print sample text with different styles
  console.log(`${bold}This is BOLD text${reset}`);
  console.log(`${dim}This is DIM text${reset}`);
  console.log(`${italic}This is ITALIC text${reset}`);
  console.log(`${underline}This is UNDERLINED text${reset}`);

  // Combine styles (red + bold)
  const redBold = '\x1b[31m\x1b[1m';
  console.log(`${redBold}This is BOLD and RED${reset}`);
}

// Run the demo function
program3_textStyling();



// ========================================
// PROGRAM 4: Background Colors
// ========================================
console.log("\n=== PROGRAM 4: Background Colors ===\n");
function program4_backgrounds() {
const bgRed = '\x1b[41m';
const bgGreen = '\x1b[42m';
const bgYellow = '\x1b[43m';
const bgBlue = '\x1b[44m';
const white = '\x1b[37m';
const black = '\x1b[30m';
const reset = '\x1b[0m';
console.log(`${bgRed}${white} Red Background ${reset}`);
console.log(`${bgGreen}${black} Green Background ${reset}`);
console.log(`${bgYellow}${black} Yellow Background ${reset}`);
console.log(`${bgBlue}${white} Blue Background ${reset}`);
}
program4_backgrounds();

// ========================================
// PROGRAM 5: Menu System
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 5: Menu System ===\n");

function program5_menuSystem() {
  // ANSI color codes
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m'; // reset back to default

  // Draw menu box with styled text
  console.log(`${cyan}${bold}╔════════════════════════════╗${reset}`);
  console.log(`${cyan}${bold}║          MAIN MENU         ║${reset}`);
  console.log(`${cyan}${bold}╚════════════════════════════╝${reset}`);

  // Menu options
  console.log(`${green}1.${reset} Start Game`);
  console.log(`${green}2.${reset} Settings`);
  console.log(`${green}3.${reset} High Scores`);
  console.log(`${yellow}4.${reset} Exit`);
}

// Run the menu system
program5_menuSystem();


// ========================================
// PROGRAM 6: Progress Bar
// ========================================

console.log("\n=== PROGRAM 6: Progress Bar ===\n");

async function program6_progressBar() {
  const green = '\x1b[32m';
  const reset = '\x1b[0m';

  // Helper function to draw the progress bar
  function showProgress(percent, label) {
    const filled = Math.floor(percent / 2); // how many blocks to fill
    const empty = 50 - filled;              // how many blocks remain
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    process.stdout.write(`\r${green}${bar}${reset} ${percent}% - ${label}`);
  }

  console.log("Downloading file...");

  // Animate from 0% to 100% in steps of 10
  for (let i = 0; i <= 100; i += 10) {
    showProgress(i, "Please wait...");
    await new Promise(resolve => setTimeout(resolve, 200)); // delay
  }

  console.log("\n✓ Download complete!");
}

// Uncomment this line to run the program
program6_progressBar();


// ========================================
// PROGRAM 7: Status Messages
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 7: Status Messages ===\n");

function program7_statusMessages() {
  // ANSI color codes
  const green = '\x1b[32m';
  const red = '\x1b[31m';
  const yellow = '\x1b[33m';
  const reset = '\x1b[0m'; // reset back to default

  // Helper function to print a status message with a symbol
  function status(message, type) {
    const symbols = {
      success: `${green}✓${reset}`,
      error: `${red}✗${reset}`,
      pending: `${yellow}⋯${reset}`
    };
    console.log(`${symbols[type]} ${message}`);
  }

  // Example status messages
  status("Server started successfully", "success");
  status("Database connection established", "success");
  status("Waiting for user input", "pending");
  status("Failed to load plugin", "error");
  status("Configuration file missing", "error");
}

// Run the demo
program7_statusMessages();


// ========================================
// PROGRAM 8: Timestamp Logger
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 8: Timestamp Logger ===\n");

function program8_timestampLogger() {
  // ANSI color codes
  const gray = '\x1b[90m';
  const cyan = '\x1b[36m';
  const reset = '\x1b[0m'; // reset back to default

  // Helper function to log a message with a timestamp
  function log(message) {
    const time = new Date().toLocaleTimeString(); // current time
    console.log(`${gray}[${time}]${reset} ${cyan}${message}${reset}`);
  }

  // Example log messages
  log("User logged in");
  log("Fetching data from API");
  log("Data processing complete");
}

// Run the demo
program8_timestampLogger();



// ========================================
// PROGRAM 9: Error Handler
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 9: Error Handler ===\n");

function program9_errorHandler() {
  // ANSI color codes
  const red = '\x1b[31m';
  const yellow = '\x1b[33m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m'; // reset back to default

  // Helper function to display an error
  function handleError(errorType, message, details) {
    console.log(`\n${red}${bold}ERROR:${reset} ${errorType}`);
    console.log(`${yellow}Message:${reset} ${message}`);
    if (details) {
      console.log(`${yellow}Details:${reset} ${details}`);
    }
  }

  // Example error messages
  handleError("TypeError", "Cannot read property 'name' of undefined", "Line 42");
  handleError("ConnectionError", "Failed to connect to database", "Timeout after 5000ms");
}

// Run the demo
program9_errorHandler();


// ========================================
// PROGRAM 10: Table Display
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 10: Table Display ===\n");

function program10_tableDisplay() {
  // ANSI color codes
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  // Example data
  const users = [
    { id: 1, name: "Alice", status: "Active" },
    { id: 2, name: "Bob", status: "Active" },
    { id: 3, name: "Charlie", status: "Inactive" }
  ];

  // Header
  console.log(`${cyan}${bold}┌──────┬─────────────┬──────────┐${reset}`);
  console.log(`${cyan}${bold}│ ID   │ Name        │ Status   │${reset}`);
  console.log(`${cyan}${bold}├──────┼─────────────┼──────────┤${reset}`);

  // Rows
  users.forEach(user => {
    const statusColor = user.status === "Active" ? green : yellow;
    console.log(
      `│ ${String(user.id).padEnd(4)} │ ${user.name.padEnd(11)} │ ${statusColor}${user.status.padEnd(8)}${reset} │`
    );
  });

  // Footer
  console.log(`${cyan}${bold}└──────┴─────────────┴──────────┘${reset}`);
}

// Run the demo
program10_tableDisplay();


// ========================================
// PROGRAM 11: Loading Animation
// ========================================

console.log("\n=== PROGRAM 11: Loading Animation ===\n");

async function program11_loadingAnimation() {
  const cyan = '\x1b[36m';
  const reset = '\x1b[0m';

  // Frames for the spinner animation
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  let i = 0;
  console.log("Loading animation demo:");

  // Update the spinner every 100ms
  const interval = setInterval(() => {
    process.stdout.write(`\r${cyan}${frames[i]}${reset} Loading...`);
    i = (i + 1) % frames.length;
  }, 100);

  // Stop after 3 seconds
  setTimeout(() => {
    clearInterval(interval);
    process.stdout.write('\r✓ Complete! \n');
  }, 3000);
}

// Uncomment this line to run the animation
program11_loadingAnimation();


// ========================================
// PROGRAM 12: Diff Viewer
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 12: Diff Viewer ===\n");

function program12_diffViewer() {
  // ANSI color codes
  const green = '\x1b[32m';
  const red = '\x1b[31m';
  const reset = '\x1b[0m';

  // Helper function to display differences
  function showDiff(oldLines, newLines) {
    console.log("Changes:");
    oldLines.forEach(line => {
      console.log(`${red}- ${line}${reset}`);
    });
    newLines.forEach(line => {
      console.log(`${green}+ ${line}${reset}`);
    });
  }

  // Example old vs new code
  const oldCode = ["const x = 10;", "console.log(x);"];
  const newCode = ["const x = 20;", "const y = 5;", "console.log(x + y);"];

  // Show the diff
  showDiff(oldCode, newCode);
}

// Run the demo
program12_diffViewer();


// ========================================
// PROGRAM 13: Colored JSON
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 13: Colored JSON ===\n");

function program13_coloredJSON() {
  // ANSI color codes
  const blue = '\x1b[34m';   // keys
  const green = '\x1b[32m';  // string values
  const yellow = '\x1b[33m'; // numbers/booleans
  const reset = '\x1b[0m';   // reset back to default

  // Example JSON data
  const data = {
    name: "John Doe",
    age: 30,
    isActive: true
  };

  // Print JSON with colors
  console.log("{");
  console.log(`  ${blue}"name"${reset}: ${green}"${data.name}"${reset},`);
  console.log(`  ${blue}"age"${reset}: ${yellow}${data.age}${reset},`);
  console.log(`  ${blue}"isActive"${reset}: ${yellow}${data.isActive}${reset}`);
  console.log("}");
}

// Run the demo
program13_coloredJSON();


// ========================================
// PROGRAM 14: Box Messages
// ========================================

// Print a header so you know which program is running
console.log("\n=== PROGRAM 14: Box Messages ===\n");

function program14_boxMessages() {
  // ANSI color codes
  const cyan = '\x1b[36m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  // Helper function to draw a box around a message
  function box(message, color = cyan) {
    const line = '─'.repeat(message.length + 2); // dynamic border length
    console.log(`${color}${bold}┌${line}┐${reset}`);
    console.log(`${color}${bold}│${reset} ${message} ${color}${bold}│${reset}`);
    console.log(`${color}${bold}└${line}┘${reset}`);
  }

  // Example boxed messages
  box("Welcome to the Application!");
  console.log(); // blank line
  box("Successfully saved!", '\x1b[32m'); // green box
}

// Run the demo
program14_boxMessages();


// ========================================
// PROGRAM 15: Complete Logger Class
// ========================================

console.log("\n=== PROGRAM 15: Complete Logger Class ===\n");

function program15_completeLogger() {
  class Logger {
    // ANSI color codes
    static colors = {
      reset: '\x1b[0m',
      gray: '\x1b[90m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      cyan: '\x1b[36m'
    };

    // Timestamp in HH:MM:SS format
    static timestamp() {
      return new Date().toISOString().split('T')[1].split('.')[0];
    }

    // Generic log method
    static log(level, color, message) {
      const time = `${this.colors.gray}[${this.timestamp()}]${this.colors.reset}`;
      const tag = `${color}[${level}]${this.colors.reset}`;
      console.log(`${time} ${tag} ${message}`);
    }

    // Specific log levels
    static info(msg) {
      this.log('INFO', this.colors.cyan, msg);
    }
    static success(msg) {
      this.log('SUCCESS', this.colors.green, msg);
    }
    static warn(msg) {
      this.log('WARN', this.colors.yellow, msg);
    }
    static error(msg) {
      this.log('ERROR', this.colors.red, msg);
    }
    static debug(msg) {
      this.log('DEBUG', this.colors.blue, msg);
    }
  }

  // Usage example
  Logger.info("Starting application");
  Logger.debug("Loading configuration");
  Logger.success("Configuration loaded");
  Logger.warn("Using default settings");
  Logger.error("Could not connect to external service");
}

// Run the demo
program15_completeLogger();

console.log("\n\n" + "=".repeat(50));
console.log("All programs completed!");
console.log("=".repeat(50) + "\n");
