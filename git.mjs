export class Git {
    static lastCommitId = -1;

    constructor(name) {
        this.name = name;
        this.lastCommitId = -1;
        this.branches = [];

        var master = new Branch('master', null);
        this.branches.push(master);
        this.HEAD = master;
    }

    commit(message) {
        var commit = new Commit(++this.lastCommitId, this.HEAD.commit ,message);
        this.HEAD.commit = commit;
        return commit;
    }

    log() {
        var commit = this.HEAD.commit, history = [];
        while (commit) {
            history.push(commit);
            commit = commit.parent;
        }
        return history;
    }

    checkout(branchName) {
        var branch = this.branches.find(b => b.name === branchName);

        if(!branch) {
            var newBranch = new Branch(branchName, this.HEAD.commit);
            this.branches.push(newBranch);
            this.HEAD = newBranch;

            console.log('Switching to new branch: ' + branchName);
            return this;
        }

        console.log('Switching to existing branch: ' + branchName);
        this.HEAD = branch;
        return this;
    }

    branch() {
        console.log('Ramas del repositorio: \n')
        this.branches.forEach(b => console.log(`origin/${b.name}\n`))
    }

    switch(branchName) {
        var branch = this.branches.find(b => b.name === branchName);

        if(!branch) {
            console.log('Branch not found: ' + branchName);
            return this;
        }

        console.log('Switching to existing branch: ' + branchName);
        this.HEAD = branch;
        return this;
    }
}   


class Commit {
    constructor(id, parent, message) {
        this.id = id;
        this.parent = parent;
        this.message = message || '';
    }
}

class Branch {
    constructor(name, commit) {
        this.name = name;
        this.commit = commit;
    }
}


