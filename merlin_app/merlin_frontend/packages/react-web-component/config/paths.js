const path = require("path");
const fs = require("fs");
const url = require("url");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPublic: resolveApp("public"),
  appBuild: resolveApp("build")
};
