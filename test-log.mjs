import { Git } from "./git.mjs";

// Testing of git log
console.log('Git.log() test');
var repo = new Git('test-repo');
repo.commit('Initial commit test');
repo.commit('Change 1 test')

var log = repo.log(); // [1, 0]
console.assert(log.length === 2);
console.assert(!!log[0] && log[0].id === 1);
console.assert(!!log[1] && log[1].id === 0);
