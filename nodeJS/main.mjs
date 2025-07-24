import { Git } from "./git.mjs";

// git init
var repo = new Git("my-repo");

// git commit -m "Initial commit"
repo.commit('Initial commit')

// git commit -m "Change 1"
repo.commit('Change 1')

//git log
repo.log()

// git checkout -b feature
repo.checkout('feature');

// git checkout master
repo.checkout('master');

// git branch
repo.branch()

// git switch feature
repo.switch('feature')