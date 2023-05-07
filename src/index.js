const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");

const executeRoot = process.cwd();

function findNodeModulesDirectories(directoryPath, results) {
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory && file === "node_modules") {
      results.push(filePath);
    } else if (isDirectory) {
      findNodeModulesDirectories(filePath, results);
    }
  }
}

function deleteTarget(filePaths) {
  for (const filePath of filePaths) {
    fs.rmSync(
      filePath,
      { recursive: true },
      (err) => err && console.log(chalk.redBright(`Error: ${err}`))
    );
    console.log(chalk.greenBright(`Deleted `), chalk.yellowBright(filePath));
  }
}

function main() {
  const nodeModulePaths = [];
  findNodeModulesDirectories(executeRoot, nodeModulePaths);

  if (nodeModulePaths.length === 0)
    return console.log(chalk.yellowBright(" node_modules is not found"));

  console.log(chalk.yellowBright("Paths: "));
  for (const nodeModulePath of nodeModulePaths) {
    console.log(chalk.cyanBright(nodeModulePath));
  }

  inquirer
    .prompt({
      type: "confirm",
      name: "Confirm",
      message: "Delete all node_modules folder? ",
    })
    .then((confirm) => {
      if (!confirm.Confirm) {
        return;
      } else {
        deleteTarget(nodeModulePaths);
        return console.log(chalk.green("Compelete!"));
      }
    });
}

module.exports = main;
