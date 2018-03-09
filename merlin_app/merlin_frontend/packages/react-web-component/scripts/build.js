const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const argv = require("yargs").argv;
const webpack = require("webpack");
const config = require("../config/webpack.prod.config");

function execute() {
  build().then(
    ({ stats }) => {
      console.log("build Success!!");
      copyPublicFolder();
    },
    err => {
      console.log("error");
    }
  );
}

function build() {
  console.log("Creating an optimized production build...");

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      // console.log("Compiler has finished execution.");
      if (err) {
        return reject(err);
      }
      return resolve({ stats });
    });
  });
}

// function buildCallback(err, stats) {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stats);
//   return true;
// }

// copy folder and file
function copyPublicFolder() {
  fs.copySync("/dist/bundle.js", "/dist/copy.js", err => {
    if (err) return console.log(err);

    console.log(chalk.yellow("success file copy"));
  });
}

execute();
