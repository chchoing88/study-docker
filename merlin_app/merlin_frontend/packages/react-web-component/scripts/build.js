const path = require("path");
const paths = require("../config/paths");
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
      console.log("build error");
    }
  );
}

function build() {
  console.log("Creating an optimized production build...");

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      return resolve({ stats });
    });
  });
}

// copy folder and file
function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild);
}

execute();
