#!/usr/bin/env node
/**
 * yarn git:push — build, then add, commit and push.
 *  1. Refuses to run outside this folder's own git repo or without `origin`.
 *     It never runs `git init` and never invents a remote.
 *  2. `yarn build`. If the build fails, nothing is committed or pushed.
 *  3. `git add -A`, commit "Yet another commit" only when something is staged.
 *  4. `git push origin <current branch>`.
 *
 *   GIT_PUSH_MESSAGE  commit message (default "Yet another commit")
 *   GIT_PUSH_BRANCH   branch to push (default: current branch)
 */
const { spawnSync } = require("child_process");
const path = require("path");

const cwd = path.join(__dirname, "..");
const git = (args, opts = {}) => spawnSync("git", args, { cwd, encoding: "utf8", ...opts });

function die(msg) {
  console.error(`git:push: ${msg}`);
  process.exit(1);
}

const top = git(["rev-parse", "--show-toplevel"]);
if (top.status !== 0 || path.resolve(top.stdout.trim()) !== path.resolve(cwd)) {
  die("this folder is not its own git repository. Run `git init -b main` here and add the remote first.");
}
if (git(["remote", "get-url", "origin"]).status !== 0) {
  die('no "origin" remote. Add the repository URL with `git remote add origin <url>` first.');
}

const build = spawnSync("yarn", ["build"], { cwd, stdio: "inherit", shell: process.platform === "win32" });
if (build.status !== 0) die("build failed: nothing was committed or pushed.");

if (git(["add", "-A"], { stdio: "inherit" }).status !== 0) die("git add failed.");
const staged = git(["diff", "--cached", "--quiet"]).status !== 0;
if (staged) {
  const message = process.env.GIT_PUSH_MESSAGE || "Yet another commit";
  if (git(["commit", "-m", message], { stdio: "inherit" }).status !== 0) die("commit failed.");
} else {
  console.log("git:push: nothing to commit.");
}

const branch = process.env.GIT_PUSH_BRANCH || git(["rev-parse", "--abbrev-ref", "HEAD"]).stdout.trim();
const push = git(["push", "origin", branch], { stdio: "inherit" });
process.exit(push.status || 0);
