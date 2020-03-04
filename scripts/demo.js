var ghpages = require("gh-pages");
const shell = require("shelljs");
const chalk = require("chalk");

// 发布
ghpages.publish(
  "./demo",
  {
    branch: "gh-pages"
  },
  err => {
    if (err) {
      console.log(chalk.red(err)); // eslint-disable-line
    } else {
      shell.rm("-rf", "./demo");
      console.log(chalk.green("demo同步完成!")); // eslint-disable-line
    }
  }
);
